import { useLayoutEffect, useState } from "react";

const App = () => {
  //useLayoutEffect() is the synchronous version of useEffect()
  const [items, setItems] = useState([]);
  useLayoutEffect(() => {
    console.log("Fetching...");
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  
  return (
    <div className="App">
      {items.map((item) => (
        JSON.stringify(item)
      ))}
    </div>
  )
}

export default App;