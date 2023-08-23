import React from "react";
import { ProductsType } from "../../../typing";
import { notFound } from "next/navigation";
import AddToBasketButton from "./AddToBasketButton";
import SingleProductImage from "./SingleProductImage";

type PageProps = {
  params: {
    productId: string[] | any;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { productId: number[] };
}) {
  const title = await fetchProduct(params.productId[0]);
  if (!title) return notFound();
  // props to pass to title needs to be string
  const productsTitle = title.title;
  // console.log(params.productId[0]);
  return {
    title: `Portfolio - ${productsTitle.replaceAll("%20", " ")}`,
  };
}

const fetchProduct = async (productId: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();
  if (res.status === 200) {
    return product;
  }
};

async function ProductPage({ params: { productId } }: PageProps) {
  const product: ProductsType = await fetchProduct(productId[0]);
  // console.log("id:", productId[0]);
  const { id, title, price, description, category, image } = product;

  return (
    <div className=" flex flex-col lg:flex-row gap-10 items-start justify-center ">
      <SingleProductImage image={image} />
      <div className="flex flex-col gap-4 my-auto">
        <div className="flex flex-col gap-2 border-b border-gray-400 pb-4">
          <span className="text-xl font-bold">Title:</span>
          <p>{title}</p>
        </div>
        <div className="flex flex-col gap-2 border-b border-gray-400 pb-4">
          <span className="text-xl font-bold">Price:</span>
          <p>{price} $</p>
        </div>

        <div className="flex flex-col gap-2 border-b border-gray-400 pb-4">
          <span className="text-xl font-bold">Descrpition:</span>
          <p>{description}</p>
        </div>

        <div className="flex flex-col gap-2  border-b border-gray-400 pb-4">
          <span className="text-xl font-bold">category:</span>
          <p>{category}</p>
        </div>
        <AddToBasketButton product={product} />
      </div>
    </div>
  );
}

export default ProductPage;
