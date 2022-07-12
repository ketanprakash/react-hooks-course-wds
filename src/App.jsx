// import { useReducer } from "react";

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// }

// const reducer = (state, action) => {
//   switch(action.type){
//     case ACTIONS.INCREMENT:
//       return {...state, count: state.count + 1};
//     case ACTIONS.DECREMENT:
//       return {...state, count: state.count - 1};
//     default:
//       return state;
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, {count: 0});

//   const increment = () => {
//     dispatch({type: ACTIONS.INCREMENT});
//   }

//   const decrement = () => {
//     dispatch({type: ACTIONS.DECREMENT})
//   }
  
//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <span>&nbsp;{state.count}&nbsp;</span>
//       <button onClick={decrement}>-</button>
//     </div>
//   )
// }

// export default App;

import { useState, useReducer } from "react";
import Todo from './Todo';

export const ACTIONS = {
  CREATE_TODO: 'create-todo',
  REMOVE_TODO: 'remove-todo',
  COMPLETE_TODO: 'complete-todo'
};

const reducer = (todos, action) => {
  switch(action.type){
    case ACTIONS.CREATE_TODO:
      return [...todos, {id: `${Date.now()}`, name: action.payload.name, complete: false}]

    case ACTIONS.REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);

    case ACTIONS.COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id){
          return {...todo, complete: !todo.complete};
        }
        return todo;
      })
  }
}

const App = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.CREATE_TODO, payload: {name}})
    setName('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/>
        <button type="submit">
          Create Todo
        </button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      ))}
    </>
  )
}


export default App;