import React from "react";

function Item(props) {
  const { item } = props;

  return (
    <div>
      <p>
        {item.type} {item.model} {item.color}
      </p>
    </div>
  );
}

export default Item;
