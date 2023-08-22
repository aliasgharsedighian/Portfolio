"use client";
import React, { useState } from "react";
import axios from "axios";

function PostPage() {
  const [userId, setUserId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
  };

  const handleSubmit: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId,
          title,
          body,
        },
        { headers: headers }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally();
  };
  return (
    <div className="flex flex-col gap-3">
      <form
        className="flex flex-col gap-3 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5">
          <label>User Id:</label>
          <input
            className="input"
            type="number"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(parseInt(e.target.value))}
          />
        </div>
        <div className="flex gap-5">
          <label>Title:</label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label>Body:</label>
          <input
            className="input"
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="button" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostPage;
