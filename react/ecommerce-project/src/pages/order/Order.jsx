import dayjs from "dayjs";
import "./Order.css";

function Order({ productData }) {
  return (
    <>
      <div className="product-image-container">
        <img src={productData.product.image} />
      </div>

      <div className="product-details">
        <div className="product-name">{productData.product.name}</div>
        <div className="product-delivery-date">
          Arriving on:{" "}
          {dayjs(productData.estimatedDeliveryTimeMs).format("MMMM D")}
        </div>
        <div className="product-quantity">Quantity: {productData.quantity}</div>
        <button className="buy-again-button button-primary">
          <img className="buy-again-icon" src="images/icons/buy-again.png" />
          <span className="buy-again-message">Add to Cart</span>
        </button>
      </div>

      <div className="product-actions">
        <a href="/tracking">
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    </>
  );
}

export { Order };
