"use client";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
} from "../../../redux/Features/basket/basketSlice";

type Props = {
  id: number;
  title: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  image: string;
  hasPrime: any;
  quantity: number;
};

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
  quantity,
}: Props) {
  const dispatch = useDispatch();

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
      quantity,
    };
    // push items into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // remove item from redux
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <img className="h-[200px] w-[200px] object-contain" src={image} alt="" />
      {/* {middle} */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill({})
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>${price}</p>
        <span>{quantity}</span>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Deliver</p>
          </div>
        )}
      </div>
      {/* {right add/remove} */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="addButton ">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="addButton ">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
