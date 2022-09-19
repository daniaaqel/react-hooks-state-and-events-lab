import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setinCart] = useState(false)

  const itemClass = inCart ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setinCart(!inCart)}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
