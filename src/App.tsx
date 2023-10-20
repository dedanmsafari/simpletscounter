import "./App.css";
import Button from "./components/button";
import Box from "./components/box";
import CountReducer from "./reducers/count";
import { ActionType } from "./models/count";

function App() {
  const [state, dispatch] = CountReducer();
  return (
    <>
      <div>Counter functionality Reducer</div>
      <Box as="h4">{state.country}</Box>
      <Box as="h6">{state.mode}</Box>
      <Box as="p">{state.count}</Box>
      <Button
        variant="primary"
        onClick={() =>
          dispatch({ type: ActionType.increment, mode: "Hard Word" })
        }
      >
        Increment
      </Button>
      <Box
        as="button"
        className="btn btn-danger"
        disabled={state.count === 0}
        onClick={() =>
          dispatch({ type: ActionType.decrement, mode: "Slow Work" })
        }
      >
        Decrement
      </Box>
    </>
  );
}

export default App;
