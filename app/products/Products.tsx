import { ProductsType } from "../../typing";
import Product from "./Product";

const fetchProducts = async (): Promise<ProductsType[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
};

const Products:any = async () => {
  const products = await fetchProducts();

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {products
        .slice(0, 4)
        .map(
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

      <img
        className="md:col-span-full"
        src="http://localhost:3000/images/adv.jpg"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
            }: ProductsType) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            )
          )}
      </div>
      {products
        .slice(5, products.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: ProductsType) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}

      {products
        .slice(0, 4)
        .map(
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

      <img
        className="md:col-span-full"
        src="http://localhost:3000/images/adv.jpg"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
            }: ProductsType) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            )
          )}
      </div>
      {products
        .slice(5, products.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: ProductsType) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}

      {products
        .slice(0, 4)
        .map(
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

      <img
        className="md:col-span-full"
        src="http://localhost:3000/images/adv.jpg"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(
            ({
              id,
              title,
              price,
              description,
              category,
              image,
            }: ProductsType) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            )
          )}
      </div>
      {products
        .slice(5, products.length)
        .map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
          }: ProductsType) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )
        )}
    </div>
  );
};

export default Products;
