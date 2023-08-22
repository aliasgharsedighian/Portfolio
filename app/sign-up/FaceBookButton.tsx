"use client";
import React from "react";
import { useRouter } from "next/navigation";

function FaceBookButton() {
  const router = useRouter();
  return <button onClick={() => router.push("/")}>join with Facebook</button>;
}

export default FaceBookButton;
