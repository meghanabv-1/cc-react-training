import React, { useEffect, useState } from "react";
import Item from "./Item";

const items = [
  {
    type: "Fiat",
    model: "500",
    color: "white",
    id: 1,
  },
  {
    type: "Honda",
    model: "600",
    color: "black",
    id: 2,
  },
  {
    type: "Tata",
    model: "400",
    color: "red",
    id: 3,
  },
];

function List(props) {
  const { searchText } = props;
  const [listItems, setListItems] = useState(items);

  const filteredItems = searchText
    ? listItems.filter(
        (o) =>
          o.type.toLowerCase().indexOf(searchText?.toLowerCase()) > -1 ||
          o.model.toLowerCase().indexOf(searchText?.toLowerCase()) > -1 ||
          o.color.toLowerCase().indexOf(searchText?.toLowerCase()) > -1
      )
    : listItems;

  const deleteHandler = (id) => {
    const deleteItems = listItems.filter((item) => item.id !== id);
    setListItems(deleteItems);
  };

  const data = searchText ? filteredItems : listItems;

  return (
    <div>
      {data.map((item) => {
        return (
          <React.Fragment key={item.type}>
            <Item item={item} deleteHandler={deleteHandler} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default List;
