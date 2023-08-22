"use client";
import React, { useState } from "react";
import { addToBasket } from "@/redux/Features/basket/basketSlice";
import { useDispatch } from "react-redux";

interface pageProps {
  product: {
    id: number;
    title: string;
    price: string | number;
    description: string;
    category: string;
    image: string;
  };
}

const MAX_RATING = 5;
const MIN_RATING = 1;

function AddToBasketButton({ product }: pageProps) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };
  return (
    <button
      onClick={addItemToBasket}
      className="mt-auto addButton dark:text-gray-900"
    >
      Add to Basket
    </button>
  );
}

export default AddToBasketButton;
