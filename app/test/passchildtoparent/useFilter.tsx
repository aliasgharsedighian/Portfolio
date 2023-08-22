"use client";
import React, { useState } from "react";

function useFilter() {
  const [search, setSearch] = useState<string>("");
  const [greaterthan, setGreaterthan] = useState<number>(0);
  const [lessthan, setLessthan] = useState<number>(20);

  return {
    search,
    greaterthan,
    lessthan,
    render: (
      <div className="flex flex-col gap-3">
        <p>Filter</p>
        <input
          className="input"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Greaterthan"
          onChange={(e) => setGreaterthan(parseInt(e.target.value))}
        />
        <input
          className="input"
          type="number"
          placeholder="Lessthan"
          onChange={(e) => setLessthan(parseInt(e.target.value))}
        />
      </div>
    ),
  };
}

export default useFilter;
