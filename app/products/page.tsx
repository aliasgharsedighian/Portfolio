import React from "react";
import ProductsForm from "./ProductsForm";
import Products from "./Products";
import PageWrapper from "../pageWrapper";
import ProductsCategory from "./ProductsCategory";

const ProductsPage = () => {
  // const filterResults = (categoryItem: string) => {
  //   const result = products.filter((curData) => {
  //     return curData.category === categoryItem;
  //   });
  //   console.log("test");
  // };

  return (
    <>
      <PageWrapper>
        <ProductsForm />
        <ProductsCategory />
        {/* {products} */}
        <Products />
        <div className="products-load-more">
          <button>Load More</button>
        </div>
      </PageWrapper>
    </>
  );
};

export default ProductsPage;
