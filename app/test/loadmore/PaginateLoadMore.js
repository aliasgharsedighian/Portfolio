"use client";
import React, { useEffect, useState } from "react";

function PaginateLoadMore() {
  const [item, setItem] = useState([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setItem(data);
    };
    fetchData();
  }, []);

  const showMorePost = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((prev) => prev + 3);
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-4xl my-10">
        {item &&
          item.slice(0, visible).map((item) => {
            return (
              <div
                className="border border-collapse rounded-md p-3 shadow-md flex flex-col gap-5 bg-slate-600 text-yellow-50"
                key={item.id}
              >
                <span className="border border-slate-50 w-8 h-8 rounded-[50%] text-center">
                  {item.id}
                </span>
                <p className="text-center">{item.body}</p>
              </div>
            );
          })}
      </div>
      <button
        disabled={loading}
        onClick={showMorePost}
        className="load-more-btn mt-10 flex items-center justify-center text-center"
      >
        Load More
        <span className={`${loading ? "loading active" : "loading"}`}>
          <span></span>
        </span>
      </button>
    </div>
  );
}

export default PaginateLoadMore;
