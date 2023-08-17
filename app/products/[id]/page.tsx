import { getSingleProduct } from "@/utilities/products";
import React from "react";

const ProductDetails = async ({ params }: any) => {
  const id = params.id;

  const product = await getSingleProduct(id);

  console.log(product);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;
