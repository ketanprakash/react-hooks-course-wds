import { useCallback, useState } from "react";
import List from "./list";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div className="App">
      <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>
        <List getItems={getItems}/>
      </div>
      <div>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      </div>
      
    </div>
  )
}

export default App;