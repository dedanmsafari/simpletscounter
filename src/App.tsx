import "./App.css";
import Button from "./components/button";
import Box from "./components/box";
import CountReducer from "./reducers/count";
import { ActionType, createAction } from "./models/count";

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
          dispatch(createAction(ActionType.increment, "Hard Work"))
        }
      >
        Increment
      </Button>
      <Box
        as="button"
        className="btn btn-danger"
        disabled={state.count === 0}
        onClick={() => dispatch(createAction(ActionType.decrement))}
      >
        Decrement
      </Box>
    </>
  );
}

export default App;
