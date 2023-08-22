"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { id: 1, href: "/products", text: "All Products" },
  {
    id: 2,
    href: "/products/category/men's%20clothing",
    text: "Men's clothing",
  },
  {
    id: 3,
    href: "/products/category/women's%20clothing",
    text: "Women's clothing",
  },
  { id: 4, href: "/products/category/electronics", text: "Electronics" },
  { id: 5, href: "/products/category/jewelery", text: "Jewelery" },
];

function ProductsCategory() {
  const path = usePathname();
  return (
    <div className="products-title-filter">
      <div className="products-title">
        <h2>Our Products</h2>
        <span className="dark:bg-slate-100"></span>
      </div>
      <div className="products-filter">
        <div className="products-category">
          {links.map((link) => (
            <Link
              key={link.id}
              className={`${link.href === path ? "active" : ""}`}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
        {/* <div className="products-filter-button">
          <button className="dark:border-gray-100">Filter</button>
        </div> */}
      </div>
    </div>
  );
}

export default ProductsCategory;
