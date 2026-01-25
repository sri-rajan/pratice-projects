import axios from "axios";
import { useState, useEffect } from "react";

import { Cart } from "./Cart";
import "./CheckoutPage.css";
import "./checkout-header.css";
import { formateMoney } from "../../utils/money";

function CheckoutPage(props) {
  const { cart } = props;
  const [deliveryOptions, setDeliverOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => setDeliverOptions(response.data));
    axios
      .get("/api/payment-summary")
      .then((response) => setPaymentSummary(response.data));
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
              <div>Items ({paymentSummary?.totalItems || 0}):</div>
              <div className="payment-summary-money">
                {formateMoney(paymentSummary?.productCostCents || 0)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">
                {formateMoney(paymentSummary?.shippingCostCents || 0)}
              </div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">
                {formateMoney(paymentSummary?.totalCostBefroeTaxCents || 0)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">
                {formateMoney(paymentSummary?.taxCents || 0)}
              </div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">
                {formateMoney(paymentSummary?.totalCostCents || 0)}
              </div>
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
