"use client";
import React, { useEffect, useMemo, useState } from "react";

function slowFunction(num: number) {
  console.log("slow function updated");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#333",
    };
  }, [dark]);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("theme Updated");
  }, [theme]);

  return (
    <div style={theme}>
      <input
        value={number}
        type="number"
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setDark((prevTheme) => !prevTheme)}>
        {" "}
        changeTheme{" "}
      </button>
      <div>{doubleNumber}</div>
    </div>
  );
}

export default UseMemoPage;
