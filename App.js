import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

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

      {/* Increment By 5 */}
      <button
        onClick={() =>
          dispatch({ type: "incrementByValue", payload: 5 })
        }
      >
        IncrementBy5
      </button>

      {/* Decrement By 5 */}
      <button
        onClick={() =>
          dispatch({ type: "decrementByValue", payload: 5 })
        }
        style={{ marginLeft: "10px" }}
      >
        DecrementBy5
      </button>
    </div>
  );
}

export default App;