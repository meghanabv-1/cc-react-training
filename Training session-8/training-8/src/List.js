import React from "react";
import Item from "./Item";

const items = [
  {
    type: "Fiat",
    model: "500",
    color: "white",
    createdAt: "2021-10-01T11:32:02.089Z",
  },
  {
    type: "Honda",
    model: "600",
    color: "black",
    createdAt: "2021-10-01T11:32:02.089Z",
  },
  {
    type: "Tata",
    model: "400",
    color: "red",
    createdAt: "2021-10-01T11:32:02.089Z",
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
