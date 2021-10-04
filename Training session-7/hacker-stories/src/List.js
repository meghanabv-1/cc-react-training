import React from "react";
import Item from "./Item";

const items = [
  {
    type: "Fiat",
    model: "500",
    color: "white",
  },
  {
    type: "Honda",
    model: "600",
    color: "black",
  },
  {
    type: "Tata",
    model: "400",
    color: "red",
  },
];

function List(props) {
  const { searchText } = props;
  console.log(searchText);
  const filterItems = searchText
    ? items.filter(
        (o) =>
          o.type.toLowerCase().indexOf(searchText?.toLowerCase()) > -1 ||
          o.model.toLowerCase().indexOf(searchText?.toLowerCase()) > -1 ||
          o.color.toLowerCase().indexOf(searchText?.toLowerCase()) > -1
      )
    : items;

  return (
    <div>
      {filterItems.map((item) => {
        return (
          <React.Fragment key={item.type}>
            <Item item={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default List;
