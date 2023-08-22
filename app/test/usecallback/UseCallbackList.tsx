import React, { useEffect, useState } from "react";

interface pageProps {
  getNumber: number[];
}

function UseCallbackList({ getNumber }: pageProps) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getNumber);
    console.log("updating number");
  }, [getNumber]);
  return (
    <div>
      {items.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}

export default UseCallbackList;
