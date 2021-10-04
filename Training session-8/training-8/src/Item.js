import React from "react";

function Item(props) {
  const { item } = props;

  return (
    <div>
      <p>
        {item.type} {item.model} {item.color}
        <span>{new Date(item.createdAt).toUTCString()}</span>
      </p>
    </div>
  );
}

export default Item;
