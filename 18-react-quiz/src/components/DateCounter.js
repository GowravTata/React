import { useReducer } from "react";
const initialState = { count: 0, step: 1 }

function Reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step }
    case 'dec':
      return { ...state, count: state.count - state.step }
    case 'setCount':
      return { ...state, count: action.payload }
    case 'setStep':
      return { ...state, step: action.payload }
    case 'reset':
      return initialState
    default:
      throw new Error('Unknown action')
  }
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount" || action.type === "reset" || action.type === 'defStep' || action.type === 'resetStep')
  //   return action.payload;
  // if (action.type == "reset") return action.payload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(0);
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state);
  const { count, step } = state
  // const [step, dispatcher] = useReducer(reducer, 1);

  // This mutates the date object.
  const date = new Date("November 07 2023");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) })
    // setStep(Number(e.target.value));
    // dispatcher({ type: "defStep" });
  };

  const reset = function () {
    // setCount(0);
    dispatch({ type: "reset", payload: 0 });
    dispatch({ type: "reset" });
    // setStep(1);
    // dispatcher({ type: "resetStep", payload: 1 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        {/* <button onClick={() => dispatch({ type: "inc" })}>+</button> */}
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
