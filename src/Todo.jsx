import { ACTIONS } from "./App"

const Todo = ({todo, dispatch}) => {

  return (
    <div style={{
      color: todo.complete ? "gray" : "black"
    }}>
      <p>{todo.name}</p>
      <button 
        onClick={() => dispatch({type: ACTIONS.COMPLETE_TODO, payload: {id: todo.id}})}
      >
        Toggle
      </button>
      <button 
        onClick={() => dispatch({type: ACTIONS.REMOVE_TODO, payload: {id: todo.id}})}
      >
        Remove
      </button>
    </div>
  )
}

export default Todo;