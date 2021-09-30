import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import Search from "./Search";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();
  return (
    <div className="App">
      <Search onChange={(value) => setSearch(value)} />
      <List searchText={search} />
    </div>
  );
}

export default App;
