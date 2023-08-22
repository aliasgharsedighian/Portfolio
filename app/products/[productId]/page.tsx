import React from "react";
import { ProductsType } from "../../../typing";

type PageProps = {
  params: {
    productId: number;
  };
};

const fetchProduct = async (productId: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();
  if (res.status === 200) {
    return product;
  }
};

async function ProductPage({ params: { productId } }: PageProps) {
  const product: ProductsType = await fetchProduct(productId);
  console.log("id:", productId);
  const { title, price, description, category, image } = product;
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-2xl">
      <img className="w-[100px] h-[100px]" src={image} alt="" />
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <span>Category : {category}</span>
    </div>
  );
}

export default ProductPage;
