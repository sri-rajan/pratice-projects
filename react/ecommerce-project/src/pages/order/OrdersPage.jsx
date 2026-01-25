import axios from "axios";
import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import "./OrdersPage.css";
import { Orders } from "./Orders";

function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("/api/orders?expand=products")
      .then((response) => setOrders(response.data));
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => (
            <Orders key={order.id} orderData={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export { OrdersPage };
