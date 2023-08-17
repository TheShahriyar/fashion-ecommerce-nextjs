import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import NewProducts from "@/components/NewProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <NewProducts />
    </>
  );
}
