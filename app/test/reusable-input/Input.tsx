"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ReusableInputType } from "../../../typing";
import "../../../styles/test/input.css"; // Don't forget to create this file

const Input = ({
  type,
  label,
  labelType,
  className,
  setValue,
  value,
  placeholder,
  inputRef,
  spanText,
  spanImgSrc,
  spanImgAlt,
  direction,
  spanDir,
  ...rest
}: ReusableInputType) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const isPassword = type === "password";
  const customNumber = type === "customNumber";

  const handleTogglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const setTypeToInput: any = () => {
    if (isPassword) {
      if (isPasswordShown) {
        return "text";
      } else {
        return "password";
      }
    }
    if (customNumber) {
      return "text";
    } else {
      return type;
    }
  };

  const customNumberFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!customNumber) {
      setValue(e.target.value);
    } else {
      const regex = /^[0-9\b]+$/;
      if (e.target.value === "" || regex.test(e.target.value)) {
        setValue(e.target.value);
      }
    }
  };

  const setInputValue: any = () => {
    if (customNumber) {
      return value?.toLocaleString();
    }
  };

  return (
    <div className={`input-container ${className} ${labelType}`}>
      {label && <label>{label}</label>}
      <div className="input-field">
        <input
          {...rest}
          placeholder={placeholder}
          ref={inputRef}
          type={setTypeToInput()}
          onChange={customNumberFunc}
          value={customNumber ? setInputValue() : value}
          dir={direction}
        />
        {spanImgSrc && (
          <div
            className={`${
              spanDir === "left"
                ? "input-span-style left"
                : "input-span-style right"
            }`}
          >
            <img src={spanImgSrc} alt={spanImgAlt} />
            <span>{spanText}</span>
          </div>
        )}
        {isPassword && (
          <div className="icon" onClick={handleTogglePasswordVisibility}>
            {isPasswordShown ? <EyeSlashIcon /> : <EyeIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
