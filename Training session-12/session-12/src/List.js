import React, { useEffect, useState, useReducer } from "react";
import Item from "./Item";

const initItems = [
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

const listItemsReducer = (state, action) => {
  switch (action.type) {
    case "ITEMS_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };

    case "ITEMS_FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };

    case "ITEMS_FETCH_FAILED":
      return { ...state, data: [], isLoading: false, isError: true };

    case "REMOVE_ITEMS":
      return {
        ...state,
        data: state.data.filter((item) => action.payload.id !== item.id),
      };
  }
};

const getAsyncData = () =>
  new Promise((res) => setTimeout(() => res({ data: initItems }), 2000));
function List(props) {
  const { searchText } = props;
  const [listItems, dispatchListItems] = useReducer(listItemsReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    dispatchListItems({ type: "ITEMS_FETCH_INIT" });
    getAsyncData()
      .then((result) => {
        dispatchListItems({
          type: "ITEMS_FETCH_SUCCESS",
          payload: result.data,
        });
      })
      .catch(() => {
        dispatchListItems({ type: "ITEMS_FETCH_FAILED" });
      });
  }, []);

  const filteredItems = searchText
    ? listItems.data.filter(
        (o) =>
          o.type.toLowerCase().indexOf(searchText?.toLowerCase()) > -1 ||
          o.model.toLowerCase().indexOf(searchText?.toLowerCase()) > -1 ||
          o.color.toLowerCase().indexOf(searchText?.toLowerCase()) > -1
      )
    : listItems.data;

  const deleteHandler = (id) => {
    dispatchListItems({ type: "REMOVE_ITEMS", payload: id });
  };

  const data = searchText ? filteredItems : listItems.data;

  return (
    <div>
      {listItems.isLoading ? <p>Loading .....</p> : ""}
      {listItems.isError && <p>something went wrong ....</p>}
      <div>
        {data.map((item) => {
          return (
            <React.Fragment key={item.type}>
              <Item item={item} deleteHandler={deleteHandler} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default List;
