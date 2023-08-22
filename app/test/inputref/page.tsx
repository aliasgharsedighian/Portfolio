"use client";
import React, { useRef, useState } from "react";
import InputField from "./InputField";

function InputRefPage() {
  const inputRef = useRef<any>();
  const [name, setName] = useState();

  const onSubmitClick = () => {
    if (!name) {
      //   inputRef.current.focus();
      inputRef.current.focus();
      //   inputRef.current.shake();
    } else {
      alert("submit form successfully");
    }
  };
  return (
    <div>
      <InputField label={name} apiRef={inputRef} onChange={setName} />

      <button onClick={onSubmitClick}>submit the form!</button>
    </div>
  );
}

export default InputRefPage;
