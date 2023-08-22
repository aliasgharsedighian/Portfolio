"use client";
import React, { useCallback, useMemo, useState } from "react";
import UseCallbackList from "./UseCallbackList";

function UseCallbackPage() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  //useMemo take function and return value of function but
  //useCallback take function and retunr function

  const getNumber: any = useCallback((): number[] => {
    for (let i = 0; i < 1000000000; i++) {}
    return [number, number + 1, number + 2];
  }, [number]);
  return (
    <div style={theme}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>{number}</div>
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <UseCallbackList getNumber={getNumber} />
    </div>
  );
}

export default UseCallbackPage;
