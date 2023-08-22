"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import PostComponent from "./PostComponent";

function SuspenseEx() {
  return (
    <div>
      <Suspense fallback={<div>Loading Posts ...</div>}>
        <PostComponent />
      </Suspense>
    </div>
  );
}

export default SuspenseEx;
