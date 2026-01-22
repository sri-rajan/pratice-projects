import axios from "axios";
import { useState, useEffect } from "react";

import { Cart } from "../components/Cart";
import "./CheckoutPage.css";
import "./checkout-header.css";

const data = [
  {
    id: 1,
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId: "1",
    createdAt: "2026-01-22T15:43:16.993Z",
    updatedAt: "2026-01-22T15:43:16.993Z",
    product: {
      keywords: ["socks", "sports", "apparel"],
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: { stars: 4.5, count: 87 },
      priceCents: 1090,
      createdAt: "2026-01-22T15:43:16.993Z",
      updatedAt: "2026-01-22T15:43:16.993Z",
    },
  },
  {
    id: 2,
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId: "2",
    createdAt: "2026-01-22T15:43:16.994Z",
    updatedAt: "2026-01-22T15:43:16.994Z",
    product: {
      keywords: ["sports", "basketballs"],
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: { stars: 4, count: 127 },
      priceCents: 2095,
      createdAt: "2026-01-22T15:43:16.994Z",
      updatedAt: "2026-01-22T15:43:16.994Z",
    },
  },
];
function CheckoutPage(props) {
  const { cart } = props;
  const [deliveryOptions, setDeliverOptions] = useState([]);
  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => setDeliverOptions(response.data));
  }, []);
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              {/* <img className="mobile-logo" src="images/logo.png" /> */}
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOptions?.length &&
              cart.map((cartItem) => (
                <Cart
                  key={cartItem.productId}
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />
              ))}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export { CheckoutPage };
