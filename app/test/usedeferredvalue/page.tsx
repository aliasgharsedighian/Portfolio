"use client";
import React, { useState } from "react";
import List from "./List";

function UseDeferredValuePage() {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="m-5 flex flex-col gap-5">
      <input
        className="border border-slate-900 p-3 rounded-lg"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <List input={input} />
    </div>
  );
}

export default UseDeferredValuePage;
