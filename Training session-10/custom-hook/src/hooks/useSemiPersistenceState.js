import { useState, useEffect } from "react";

const useSemiPersistenceState = () => {
  const [state, setState] = useState(localStorage.getItem("name") || "");

  useEffect(() => {
    localStorage.setItem("name", state);
  }, [state]);

  return [state, setState];
};

export default useSemiPersistenceState;
