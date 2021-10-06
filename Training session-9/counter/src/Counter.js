import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(localStorage.getItem("count") || 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div>
      <h3>You clicked {count} times</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
