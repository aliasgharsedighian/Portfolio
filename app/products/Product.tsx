"use client";

import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/Features/basket/basketSlice";
import Link from "next/link";
import { motion } from "framer-motion";

const images = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const MAX_RATING = 5;
const MIN_RATING = 1;

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

function Product({ id, title, price, description, category, image }: Props) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  return (
    <motion.div
      variants={images}
      className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-xl rounded-xl"
    >
      <Link href={`/products/${id}`}>
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 dark:text-gray-400">
          {category}
        </p>
        <img
          src={image}
          alt=""
          className="h-[200px] w-[200px] object-contain mx-auto"
        />
        <h4 className="my-3 dark:text-gray-900">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill({})
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2 dark:text-gray-900">
          {description}
        </p>
        <div className="mb-5 dark:text-gray-900">
          <p>${price}</p>
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="w-12"
              src="http://localhost:3000/images/Prime-tag-.png"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </Link>
      <button
        onClick={addItemToBasket}
        className="mt-auto addButton dark:text-gray-900"
      >
        Add to Basket
      </button>
    </motion.div>
  );
}

export default Product;
