import React from "react";
import style from "./style.css";

function Item(props) {
  const { item } = props;

  return (
    <li>
      <span className="item"> {item.type}</span>
      <span className="item"> {item.model}</span>
      <span className="item"> {item.color}</span>
      <button onClick={() => props.deleteHandler(item.id)}>Delete</button>
    </li>
  );
}

export default Item;
