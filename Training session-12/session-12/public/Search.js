import { useState } from "react";

const Search = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search For Items: </label>
      <input id="search" type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
