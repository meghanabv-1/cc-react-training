import React from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";

function Item() {
  const [name, setName] = useSemiPersistenceState();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      Name:{" "}
      <input type="text" name="name" value={name} onChange={handleChange} />
    </div>
  );
}

export default Item;
