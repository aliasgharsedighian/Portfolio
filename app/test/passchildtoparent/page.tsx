"use client";
import React from "react";
import useFilter from "./useFilter";
import DisplayContent from "./DisplayContent";

function PassDataChildToParentPage() {
  const { render, search, greaterthan, lessthan } = useFilter();

  return (
    <div className="m-5">
      <DisplayContent {...{ search, lessthan, greaterthan }} />
      {render}
    </div>
  );
}

export default PassDataChildToParentPage;
