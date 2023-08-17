import { getSingleProduct } from "@/utilities/products";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ params }: any) => {
  const id = params.id;

  const product = await getSingleProduct(id);

  console.log(product);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex space-x-20">
            <div className="w-1/2 grid grid-cols-3 gap-4">
              <div>
                {product.images.map((image: any, index: any): any => (
                  <Image
                    key={index}
                    src={image}
                    alt={product.title}
                    width={0}
                    height={0}
                    quality={100}
                    style={{ width: "100%", height: "auto" }}
                  />
                ))}
              </div>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={0}
                height={0}
                quality={100}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="w-1/2">
              <h1>{product.title}</h1>
              <div>Old Price: {product.price}</div>
              <div>
                New Price:{" "}
                {product.price -
                  product.price * (product.discountPercentage / 100)}
              </div>
              <div>Rating: {product.rating}</div>
              <div>Brand: {product.brand}</div>
              <div>Category: {product.category}</div>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
