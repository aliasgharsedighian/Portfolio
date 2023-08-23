"use client";
import React, { useState } from "react";

interface pageProps {
  image: string;
}

function SingleProductImage({ image }: pageProps) {
  const [mainImg, setMainImg] = useState(image);
  return (
    <div className="flex flex-col gap-4">
      <img className="w-[500px]" src={mainImg} alt="" />
      <div className="flex justify-between ">
        <img
          className="w-[60px] border border-yellow-300 cursor-pointer"
          src={image}
          onClick={() => setMainImg(image)}
          alt=""
        />
        <img
          className="w-[60px] border border-yellow-300 cursor-pointer"
          src="/images/product/product16.jpg"
          onClick={() => setMainImg("/images/product/product16.jpg")}
          alt=""
        />
        <img
          className="w-[60px] border border-yellow-300 cursor-pointer"
          src="/images/product/product17.jpg"
          onClick={() => setMainImg("/images/product/product17.jpg")}
          alt=""
        />
        <img
          className="w-[60px] border border-yellow-300 cursor-pointer"
          src="/images/product/product19.jpg"
          onClick={() => setMainImg("/images/product/product19.jpg")}
          alt=""
        />
      </div>
    </div>
  );
}

export default SingleProductImage;
