"use client";

import { useSelector } from "react-redux";
import { UserType } from "../../../typing";
import { addedUser } from "../../../redux/Features/user/userSlice";

type PageProps = {
  params: {
    userId: number;
  };
};

const UserPage = ({ params: { userId } }: PageProps) => {
  const users = useSelector(addedUser);
  const user = users.find((user: UserType) => user.id == userId);
  return (
    <div>
      userPage:
      <br />
      <p>
        Name :{user?.firstname} {user?.lastname}
      </p>
      <p>
        {user?.city} {user?.country}
      </p>
      <p>{user?.email}</p>
    </div>
  );
};

export default UserPage;
