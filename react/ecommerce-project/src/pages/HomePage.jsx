import axios from "axios";
import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import "./HomePage.css";
// import { products } from "../../starting-code/data/products";
import { Product } from "../components/Product";
function HomePage(props) {
  const { cart } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("inside useEffect>>");
    axios.get(`/api/products`).then((response) => {
      console.log("this is data", response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((ele) => {
            return (
              <Product
                name={ele.name}
                key={ele.id}
                image={ele.image}
                rating={ele.rating}
                priceCents={ele.priceCents}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export { HomePage };
