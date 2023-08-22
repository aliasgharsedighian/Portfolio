"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface dataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function GetPage() {
  const [data, setData] = useState<dataType[]>();

  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
      .finally();
  }, []);

  return (
    <div className="flex flex-col gap-3 m-3">
      {data &&
        data.map((item: dataType) => {
          return (
            <div
              className="border border-slate-800 p-3 rounded-lg cursor-pointer"
              key={item.id}
              onClick={() => router.push(`/test/crud/get/${item.id}`)}
            >
              <h4 className="flex text-center text-lg font-bold">
                {item.title}
              </h4>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default GetPage;
