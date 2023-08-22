"use client";

import { color } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";

//this hooks from https://www.npmjs.com/package/react-collapsed with detail and more option

function ShowMoreCard({ id, title, number, desc, href }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    duration: 100,
  });

  return (
    <>
      <div
        key={id}
        className={`border  show-more-page-container p-5 rounded-md ${
          isExpanded ? "border-blue-600" : "border-gray-400"
        }`}
      >
        <div
          className="flex gap-2"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <span
            className={`border-l border-gray-400 px-2 ${
              isExpanded && "text-red-400"
            }`}
          >
            {number}
          </span>
          <p>{title}</p>
        </div>
        {/* when expand show this div */}
        <div
          {...getCollapseProps()}
          className="flex flex-col gap-4 mt-4 border-t pt-4 border-gray-300"
        >
          <p>{desc}</p>
          <Link href={href}>مشاهده توضیحات تکمیلی</Link>
        </div>
      </div>
    </>
  );
}

export default ShowMoreCard;
