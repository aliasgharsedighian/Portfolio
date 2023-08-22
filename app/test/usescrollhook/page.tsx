"use client";
import useScroll from "./usescroll";
import React from "react";

function UseScrollPage() {
  const scrollPosition = useScroll(500, () => {
    console.log("user has scrolled past 500 pixels!");
  });
  return (
    <div className="flex flex-col h-[2000px]">
      current scroll position : {scrollPosition}px
    </div>
  );
}

export default UseScrollPage;
