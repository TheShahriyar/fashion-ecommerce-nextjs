"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiAdjustments, HiX } from "react-icons/hi";

const Header = () => {
  const currentRoute = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-3 md:py-4 lg:py-0">
          <Link
            href="/"
            className="w-[120px] md:w-auto font-bold text-xl text-black"
          >
            <span>fashioN.</span>
          </Link>
          <div
            onClick={handleMenuOpen}
            className="font-bold text-red-500 block lg:hidden [&_svg]:text-2xl md:[&_svg]:text-3xl"
          >
            <HiAdjustments />
          </div>
          <nav
            className={`flex lg:justify-end font-bold fixed top-0 left-0 w-4/5 lg:w-full transition-all duration-500 lg:relative lg:space-x-6 flex-col lg:flex-row h-full lg:h-auto bg-primary lg:bg-white text-white lg:text-black p-8 lg:p-0 z-50 ${
              open ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <div
              onClick={() => setOpen(false)}
              className="lg:hidden text-3xl md:text-5xl"
            >
              <HiX />
            </div>
            <Link
              href="/"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/" ? "text-primary" : ""
              }`}
            >
              Homepage
            </Link>
            <Link
              href="/about"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/about" ? "text-primary" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/products"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/products" ? "text-primary" : ""
              }`}
            >
              Products
            </Link>
            <Link
              href="/portfolio"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/portfolio" ? "text-primary" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/blog" ? "text-primary" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/contact" ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className={`py-2 md:py-6 uppercase text-xl lg:text-sm ${
                currentRoute === "/cart" ? "text-primary" : ""
              }`}
            >
              Cart
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
