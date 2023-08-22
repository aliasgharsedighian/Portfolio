import React from "react";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  incrementQuantity,
  decrementQuantity,
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

function CheckoutCard({
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
    <div className="checkout-card-container">
      <div className="checkout-card-content-left">
        <img src={image} alt="" />
        <div className="checkout-card-content-detail dark:text-gray-900">
          <p>{title}</p>
          <span>${price}</span>
          <span>{quantity}</span>
        </div>
      </div>
      <div className="checkout-card-content-right">
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
