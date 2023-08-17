import Link from "next/link";
import { getAllProducts } from "../utilities/products";
import ProductCard from "./ProductCard";
import { productType } from "@/type";

const NewProducts = async () => {
  const productsFromAPI = await getAllProducts();

  const products = productsFromAPI.products;

  return (
    <>
      <section className="product-section py-12 lg:py-20">
        <div className="container">
          <div className="section-title text-center mb-10">
            <h2 className="text-3xl">New Products</h2>
            <p className="mt-4 text-base">
              These products data is coming from https://dummyjson.com/ REST API
              website
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {products.slice(0, 8).map((product: productType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="bg-primary text-white text-base xl:text-lg px-8 xl:px-10 py-3 rounded-sm font-bold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProducts;
