import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | resetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count : {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        inc by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        dec by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};

export default Counter;
