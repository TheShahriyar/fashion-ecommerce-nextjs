import { productType } from "@/type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: productType;
}

const ProductCard = ({ product }: Props) => {
  const { title, description, price, rating, stock, brand, thumbnail, id } =
    product;
  return (
    <>
      <div>
        <div className="aspect-square">
          <Image
            src={thumbnail}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <div>{price}</div>
          <div>{rating}</div>
          <div>{stock > 0 ? "In Stock" : "Stock Out"}</div>
          <div>{brand}</div>
          <Link href={`/products/${id}`}>View Details</Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
