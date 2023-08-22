import { notFound } from "next/navigation";
import React from "react";
import { ProductsType } from "../../../../typing";
import Product from "../../Product";
import ProductsCategory from "../../ProductsCategory";
import ProductsForm from "../../ProductsForm";

type pageProps = {
  params: {
    productsCategory: string;
  };
};

const fetchCategoryProduct = async (productsCategory: string) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${productsCategory}`
  );
  const products = await res.json();
  if (res.status === 200) {
    return products;
  } else {
    return notFound;
  }
};

async function ProductsCategoryPage({
  params: { productsCategory },
}: pageProps) {
  const products = await fetchCategoryProduct(productsCategory);
  return (
    <div>
      <ProductsForm />
      <ProductsCategory />
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {products.map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: ProductsType) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          }
        )}
      </div>
      <div className="products-load-more">
        <button>Load More</button>
      </div>
    </div>
  );
}

export default ProductsCategoryPage;
