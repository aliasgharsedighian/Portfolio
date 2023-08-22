"use client";

// import { useSelector } from "react-redux";
// import {
//   activity,
//   userAccountLogged,
// } from "../../GlobalRedux/Features/user/userSlice";

export default function Head() {
  //   const user = useSelector(userAccountLogged);
  //   const userActivity = useSelector(activity);
  return (
    <>
      <title>
        Profile Page
        {/* {userActivity ? `${user.firstname} ${user.lastname}` : "Login First"} */}
      </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
