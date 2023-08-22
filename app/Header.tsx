"use client";

import "../styles/Navbar.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectItems, selectTotal } from "../redux/Features/basket/basketSlice";
import {
  activity,
  userAccountLogged,
  addUserLogged,
  changeActivity,
} from "../redux/Features/user/userSlice";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CheckoutCard from "./products/checkout/CheckoutCard";
import { ProductsType } from "../typing";
import DarkModeButton from "./DarkModeButton";

const links = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/products", text: "Products" },
  { id: 3, href: "/portfolio", text: "Portfolio" },
  { id: 4, href: "#", text: "About" },
  { id: 5, href: "#", text: "Contact" },
];

function Header() {
  const path = usePathname();

  const dispatch = useDispatch();
  const router = useRouter();
  const userActivity = useSelector<boolean>(activity);
  const userAccount = useSelector(userAccountLogged);

  const items = useSelector(selectItems);
  const total = useSelector<number>(selectTotal);

  const [sidebar, setSidebar] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  let menuRef = useRef<any>(null);

  useEffect(() => {
    let handler: any = (e: FormEvent<HTMLDivElement>) => {
      if (menuRef?.current && !menuRef.current.contains(e.target)) {
        setSidebar(false);
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef, sidebar]);

  const openMenuHandle = () => {
    // setOpenMenu((prev) => !prev);
    setSidebar(!sidebar);
    // if (navbarBgChange === false) {
    //   setNavbarBgChange(true);
    // }
    // if (navbarBgChange === true && window.scrollY < 80) {
    //   setNavbarBgChange(false);
    // }
  };

  return (
    <header className="navbar-container">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.35 }}
        className="navbar"
        ref={menuRef}
      >
        <div
          className={sidebar ? "navbar-open-menu active" : "navbar-open-menu"}
        >
          {links.map((link) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={link.id}
              className={`${
                link.href === path
                  ? "navbar-link-selected active"
                  : "navbar-link-selected dark:text-gray-900"
              }`}
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.div>
          ))}
        </div>

        <div
          className={cartOpen ? "navbar-cart-open active" : "navbar-cart-open"}
        >
          {/* top  */}
          <h2
            onClick={() => router.push("/products/checkout")}
            className="go-to-checkout-page addButton dark:text-gray-900"
          >
            go to Checkout page
          </h2>
          {items.length > 0 ? (
            <div className="navbar-cart-open-top">
              <h2 className="dark:text-gray-900">
                SubTotal({items.length} items):
                <span>{`$  ${total}`}</span>
              </h2>
            </div>
          ) : (
            <h2 className="dark:text-gray-900">Your Basket is Empty</h2>
          )}
          {/* buttom */}
          {items.map((item: ProductsType) => (
            <CheckoutCard
              key={item.id}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
              quantity={item.quantity}
            />
          ))}
        </div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.65 }}
          className="logo-area"
        >
          <Bars3Icon
            onClick={openMenuHandle}
            className="bar-header-icon dark:text-gray-900"
          />
          <img src="http://localhost:3000/images/Navbar/Logo.PNG" alt="" />

          <DarkModeButton />
        </motion.div>
        <div className="navbar-link-area">
          {links.map((link) => (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45 }}
              key={link.id}
              className={`${
                link.href === path
                  ? "navbar-link-selected active"
                  : "navbar-link-selected"
              }`}
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ x: 450 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.65 }}
          className="login-area"
        >
          <div
            onClick={() => setCartOpen((prev) => !prev)}
            className="relative link flex items-center mr-5 cursor-pointer hover:scale-105 transition-all duration-100 ease-in"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-[32px] text-gray-900 dark:text-gray-900" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 dark:text-gray-900">
              Basket
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={
              userActivity
                ? "logout-button"
                : "login-button dark:text-gray-900 dark:border-[1px] dark:border-gray-900"
            }
            onClick={() => {
              if (userActivity == false) {
                router.push("/login-page");
              } else {
                dispatch(changeActivity(false));
                dispatch(addUserLogged([]));
              }
            }}
          >
            {userActivity ? "Log out" : "Log in"}
          </motion.button>
          {userActivity ? (
            <span
              onClick={() => router.push("/profile/user-email")}
              className="dark:text-gray-900 cursor-pointer"
            >{`Hello, ${userAccount.firstname}`}</span>
          ) : (
            <button className="free-button">Start free trial</button>
          )}
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;
