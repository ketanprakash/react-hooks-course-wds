import { useState, useTransition } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 2000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++){
        l.push(e.target.value);
      }
      setList(l);
    });
  } 

  return (
    <>
      <input type="text" value={input} onChange={handleChange}/>
      {isPending ? <div>Loading...</div>: list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </>
  )
}

export default App;