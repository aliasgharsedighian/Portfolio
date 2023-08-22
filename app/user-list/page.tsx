"use client";

import Link from "next/link";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { addedUser } from "../../redux/Features/user/userSlice";
import { useState } from "react";
import { userCategories } from "../../constants";
import { usePathname } from "next/navigation";
import { UserType } from "../../typing";

function UserListPage() {
  const [popupUser, setPopupUser] = useState<UserType[]>([]);
  const [popupUserStatus, setPopupUserStatus] = useState(false);

  const users = useSelector(addedUser);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  const getInfoUserForPopup = (user: UserType) => {
    setPopupUser([user]);
    setPopupUserStatus((prev) => !prev);
  };
  return (
    <>
      <div className="usersList-header">
        <div className="header-text">
          <h3>Users</h3>
          <div className="sign-up">
            <Link href="/sign-up">
              Sign Up <UserPlusIcon className="user-plus-icon" />{" "}
            </Link>
          </div>
        </div>
        <div className="search-link">
          <div className="search-area">
            <img src="images/search-icon.png" alt="" />
            <input
              type="text"
              placeholder="Search Users"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="link-area">
            {userCategories.map((category) => {
              return (
                <Link
                  key={category}
                  className={`user-link ${isActive(category) && "underline"}`}
                  href={`/users/${category}`}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="usersList-area">
        {users
          .filter((val: UserType) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.firstname.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.lastname.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.city.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((user: UserType) => {
            return (
              <div
                key={user.id}
                onClick={() => getInfoUserForPopup(user)}
                className="user-area"
              >
                <div className="user-img">
                  <img src={user.img} alt="" />
                </div>
                <div className="user-detail">
                  <div className="user-name">
                    <h6>
                      {user.firstname} {user.lastname}
                    </h6>
                    <p>
                      {user.city}, {user.country}
                    </p>
                  </div>
                  <div className="user-fav">
                    {user.fav?.map((favorite) => (
                      <span key={favorite}>{favorite}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {popupUserStatus && (
        <div className="popup-container">
          {popupUser.map((user: UserType) => {
            return (
              <div key={user.id} className="popup-content">
                <span
                  className="popup-story-close"
                  onClick={() => {
                    setPopupUserStatus(false);
                    setPopupUser([]);
                  }}
                >
                  &times;
                </span>
                <div className="user-img">
                  <img src={user.img} alt="" />
                </div>
                <div className="user-detail">
                  <div className="user-name">
                    <h6>
                      {user.firstname} {user.lastname}
                    </h6>
                    <p>
                      {user.city}, {user.country}
                    </p>
                  </div>
                  <div className="user-email">{user.email}</div>
                  <div className="user-fav">
                    {user.fav?.map((favorite) => (
                      <span key={favorite}>{favorite}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default UserListPage;
