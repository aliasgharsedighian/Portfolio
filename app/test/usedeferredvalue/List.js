"use client";
import React, { useDeferredValue, useEffect, useMemo } from "react";

function List({ input }) {
  const deferredInput = useDeferredValue(input);
  const List_Size = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < List_Size; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input : ${input} \n DeferredValue: ${deferredInput}`);
  }, [input, deferredInput]);

  return <div>{list}</div>;
}

export default List;
