import React, { useState } from "react";
export default function Eventhandling() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };
  return (
    <div>
      <input onChange={handleNameChange} value={name} type="text" />
      <p> Name:{name}</p>

      <input onChange={handleQuantityChange} type="number" value={quantity} />
      <p>Quantity:{quantity}</p>

      <textarea
        placeholder="enter the delivery Instructions"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <p>Comment:{comment}</p>

      <select onChange={handlePaymentChange} value={payment}>
        <option value="">select an option</option>
        <option value="visa">Visa</option>
        <option value="paypal">Paypal</option>
        <option value="gift card">Gift card</option>
      </select>
      <p>payment:{payment}</p>

      <label>
        <input
          type="radio"
          value="pickup"
          onChange={handleShippingChange}
          checked={shipping == "pickup"}
        />
        pickup
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="delivery"
          onChange={handleShippingChange}
          checked={shipping == "delivery"}
        />
        Delivery
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="hybrid"
          onChange={handleShippingChange}
          checked={shipping == "hybrid"}
        />
        hybrid
      </label>
      <p>shipping:{shipping}</p>
    </div>
  );
}
