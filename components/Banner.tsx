import { bannerImg } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section className="banner-section relative">
        <div className="absolute top-0 left-0 right-0 w-full h-full">
          <Image
            src={bannerImg}
            alt="banner image"
            quality={100}
            sizes="100vw"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative flex items-center py-28 md:py-40 xl:py-60 z-10 text-white bg-black/30 md:bg-transparent">
          <div className="container">
            <h1 className="font-bold font-jost text-3xl md:text-5xl xl:text-7xl leading-[1.1]">
              Our New Sunglasses <br />
              20% Discount
            </h1>
            <p className="text-base md:text-lg mt-4 md:mt-0">
              Free shipping and 30 day returns, Flexible payments, Orders ship
              business
            </p>
            <div className="flex items-center space-x-5 md:space-x-8 mt-8 md:mt-10">
              <Link
                href="#"
                className="bg-primary text-base xl:text-lg px-8 xl:px-10 py-3 rounded-sm font-bold"
              >
                Shop Now
              </Link>
              <p className="text-base xl:text-lg font-bold">
                Start From $40.50
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
