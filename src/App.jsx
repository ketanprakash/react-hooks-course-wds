import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {...state, count: state.count + 1};
    case ACTIONS.DECREMENT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT});
  }

  const decrement = () => {
    dispatch({type: ACTIONS.DECREMENT})
  }
  
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>&nbsp;{state.count}&nbsp;</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App;