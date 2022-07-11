import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(() => 4);

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>&nbsp;&nbsp;{count}&nbsp;&nbsp;</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;