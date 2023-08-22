import axios from "axios";
import React from "react";

interface UserType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PageProps = {
  params: {
    userId: number;
  };
};

const fetchUser = async (userId: number): Promise<UserType> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  );
  const user = await res.json();
  return user;
};

async function UserPage({ params: { userId } }: PageProps) {
  const user: UserType = await fetchUser(userId);
  console.log(user);

  return (
    <div>
      {user && (
        <div className="flex flex-col items-center justify-center m-3 border border-slate-900 p-3 rounded-xl">
          <h2>{user.id}</h2>
          <h4 className="flex text-center text-lg font-bold">{user.title}</h4>
          <p>{user.body}</p>
        </div>
      )}
    </div>
  );
}

export default UserPage;
