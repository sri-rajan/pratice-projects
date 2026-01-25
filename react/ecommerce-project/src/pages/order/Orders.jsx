import dayjs from "dayjs";

import { formateMoney } from "../../utils/money";

import { Order } from "./Order";
import "./Orders.css";

function Orders({ orderData }) {
  return (
    <div className="order-container">
      <div className="order-header">
        <div className="order-header-left-section">
          <div className="order-date">
            <div className="order-header-label">Order Placed:</div>
            <div>{dayjs(orderData.orderTimeMs).format("MMMM D")}</div>
          </div>
          <div className="order-total">
            <div className="order-header-label">Total:</div>
            <div>{formateMoney(orderData.totalCostCents)}</div>
          </div>
        </div>

        <div className="order-header-right-section">
          <div className="order-header-label">Order ID:</div>
          <div>{orderData.id}</div>
        </div>
      </div>

      <div className="order-details-grid">
        {orderData?.products?.map((productData) => (
          <Order key={productData.id} productData={productData} />
        ))}
      </div>
    </div>
  );
}

export { Orders };
