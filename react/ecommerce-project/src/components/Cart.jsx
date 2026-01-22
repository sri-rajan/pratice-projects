import dayjs from "dayjs";

import { formateMoney } from "../utils/money";
import "./Cart.css";

function Cart(props) {
  const { cartItem, deliveryOptions } = props;
  const selectedDeliveryOption = deliveryOptions.find(
    (deliveryOption) => deliveryOption.id == cartItem.deliveryOptionId,
  );
  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Delivery date:{" "}
        {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
          "dddd, MMMM D",
        )}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem?.product?.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem?.product?.name}</div>
          <div className="product-price">
            {formateMoney(cartItem?.product?.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              Quantity:{" "}
              <span className="quantity-label">{cartItem?.quantity}</span>
            </span>
            <span className="update-quantity-link link-primary">Update</span>
            <span className="delete-quantity-link link-primary">Delete</span>
          </div>
        </div>

        <div className="delivery-options">
          <div className="delivery-options-title">
            Choose a delivery option:
          </div>
          {deliveryOptions.map((deliveryOption) => {
            let priceString = "FREE Shipping";
            if (deliveryOption?.priceCents > 0) {
              priceString = formateMoney(deliveryOption?.priceCents);
            }
            return (
              <div className="delivery-option" key={deliveryOption.id}>
                <input
                  checked={deliveryOption.id == cartItem.deliveryOptionId}
                  type="radio"
                  className="delivery-option-input"
                  name={`delivery-option-${cartItem.id}`}
                />
                <div>
                  <div className="delivery-option-date">
                    {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                      "dddd, MMMM D",
                    )}
                  </div>
                  <div className="delivery-option-price">{priceString}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Cart };
