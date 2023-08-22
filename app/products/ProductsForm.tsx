"use client";

import { ChangeEvent, useState } from "react";

function ProductsForm() {
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearch: any = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (!searchProduct) return;

    // navigate(`/serach-products?term=${searchProduct}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="search-products-input gap-5 w-full"
    >
      <input
        className="placeholder-gray-500 dark:placeholder-gray-100 dark:border-[1px] dark:border-gray-100 dark:py-6 dark:px-2 "
        type="text"
        value={searchProduct}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchProduct(e.target.value)
        }
        placeholder="Search Product"
      />
      <button
        className="disabled:text-gray-400"
        type="submit"
        disabled={!searchProduct}
      >
        Search
      </button>
    </form>
  );
}

export default ProductsForm;
