import { Header } from "../components/Header";
import "./HomePage.css";
import { products } from "../../starting-code/data/products";
import { Product } from "../components/Product";
function HomePage() {
  return (
    <>
      <title>Ecommerce Project</title>
      <Header />
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
