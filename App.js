import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      dispatch({ type: "increment" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>Value: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <br /><br />

      <button onClick={incrementByFive}>
        Increment by 5
      </button>
    </div>
  );
}

export default App;