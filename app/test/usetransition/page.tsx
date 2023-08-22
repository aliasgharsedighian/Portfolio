"use client";
import React, { useState, useTransition } from "react";

function UseTransitionPage() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const List_Size = 20000;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    startTransition(() => {
      const l: any = [];
      for (let i = 0; i < List_Size; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div className="m-5 flex flex-col gap-5">
      <input
        className="border border-slate-900 p-3 rounded-lg"
        type="text"
        value={input}
        onChange={handleChange}
      />
      {isPending
        ? "List is loading ..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}

export default UseTransitionPage;
