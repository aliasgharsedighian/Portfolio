"use client";

import React, { useState } from "react";
import Input from "./Input";
import "../../../styles/test/input.css";
import "./button.css";
import Button from "./Button";

function ReusableInputPage() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  return (
    <div className="flex flex-col w-[400px] mx-auto my-3 gap-5">
      <Input
        type="customNumber"
        label="Enter Your name"
        labelType="top"
        className="my-input"
        setValue={setInputValue2}
        value={inputValue2}
        spanText="تتر"
        spanImgSrc="/images/tetherImg.PNG"
        spanImgAlt="تتر"
        spanDir="left"
        direction="rtl"
      />
      {inputValue2}
      <Input
        type="password"
        label="Password"
        labelType="top"
        className="my-input"
        setValue={setInputValue}
        value={inputValue}
      />
      {inputValue}
      <Button
        buttonClass="red"
        buttonText="فروش"
        buttonType="button"
        onClickButton={() => console.log("button submitted")}
      />
      <Button
        buttonClass="green"
        buttonText="خرید"
        buttonType="button"
        onClickButton={() => console.log("button submitted2")}
      />
      <Button
        buttonClass="blue"
        buttonText="نمودار"
        buttonType="button"
        onClickButton={() => console.log("button submitted3")}
      />
      <span
        data-from="0"
        data-to="4000"
        data-refresh-interval="100"
        data-speed="2500"
      >
        0
      </span>
    </div>
  );
}

export default ReusableInputPage;
