import { useEffect, useRef } from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";

function Test() {
  const [name, setName] = useSemiPersistenceState();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current.value) {
      console.log(name);
    }
  }, [name]);
  return (
    <div>
      Name:{" "}
      <input ref={inputRef} type="text" name="name" onChange={handleChange} />
    </div>
  );
}

export default Test;
