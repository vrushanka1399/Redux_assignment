import store from "./store";

// increase by 5
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

console.log(store.getState()); // 5

// decrease by 1
store.dispatch({ type: "decrement" });

console.log(store.getState()); // 4
