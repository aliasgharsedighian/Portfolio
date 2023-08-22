"use client";
import React, { memo } from "react";
import { useState } from "react";
import Swatch from "./Swatch";
import Link from "next/link";

// const MemoedSwatch = memo(Swatch);

function MemoPage() {
  const [appRenderIndex, SetAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");
  console.log(`App rendered ${appRenderIndex}`);
  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border border-slate-900 p-2"
          onClick={() => SetAppRenderIndex((prev) => prev + 1)}
        >
          Re-Render App
        </button>
        <button
          className="border border-slate-900 p-2"
          onClick={() => setColor(color === "red" ? "blue" : "red")}
        >
          Change Color
        </button>
      </div>
      <div>
        <Swatch color={color} />
        <Swatch color={color === "red" ? "blue" : "red"} />
      </div>
      <div>
        <Link href="/test/memo/usememo">useMemo example</Link>
      </div>
    </div>
  );
}

export default MemoPage;
