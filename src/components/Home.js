import React, { useState } from "react";
import * as faker from "faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";

faker.seed(100);
const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.name} />
      ))}
    </div>
  );
};

export default Home;
