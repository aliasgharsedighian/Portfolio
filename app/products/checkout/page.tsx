"use client";
import React from "react";
import { useSelector } from "react-redux";
import { ProductsType } from "../../../typing";
import CheckoutProduct from "./CheckoutProduct";
import {
  selectItems,
  selectTotal,
} from "../../../redux/Features/basket/basketSlice";
import { activity } from "../../../redux/Features/user/userSlice";

function CheckoutPage() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const session = useSelector(activity);
  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* {left} */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            className="w-[1020px] h-[250px] object-contain"
            src="http://localhost:3000/images/Prime-day-banner.png"
            alt=""
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is empty." : "Shopping Basket"}
            </h1>
            {items.map((item: ProductsType, i: number) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        {/* {right} */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap dark:text-gray-900">
                Subtotal ({items.length} items):
                <span className="font-bold">{` $  ${total}`}</span>
              </h2>
              <button
                disabled={!session}
                className={`addButton mt-2 ${
                  !session &&
                  "no-sign-in-checkout-btn from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;
