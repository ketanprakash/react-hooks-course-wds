import { useState, useRef } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current++;
//   })

//   return (
//     <div className="App">
//       <input 
//         type="text" 
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{
//           fontSize: "2rem",
//           padding: "0.2em"
//         }}
//       />
//       <h1>My name is {name}</h1>
//       <div>Rendered {renderCount.current} times</div>
//     </div>
//   )
// }

const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(0);

  const focus = () => {
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <input 
        ref={inputRef}
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          fontSize: "2rem",
          padding: "0.2em"
        }}
      />
      <h1>My name is {name}</h1>
      <button onClick={focus}>Focus</button>
    </div>
  )
}
export default App;