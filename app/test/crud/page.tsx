import Link from "next/link";
import React from "react";

function CrudPage() {
  return (
    <div className="flex flex-col gap-3 m-3">
      <Link href="/test/crud/get">Get</Link>
      <Link href="/test/crud/post">Post</Link>
      <Link href="/test/crud/put">Put</Link>
      <Link href="/test/crud/delete">Delete</Link>
    </div>
  );
}

export default CrudPage;
