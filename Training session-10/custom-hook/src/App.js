import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";
import Test from "./Test";
import PrevState from "./prevState";
import Input from "./Input";

function App() {
  return (
    <div>
      <Input type="text" name="name" value="" />
      <Item />
      <Test />
      <PrevState />
    </div>
  );
}

export default App;
