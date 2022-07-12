import { useState, useMemo, useEffect } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  //useMemo used to changed object only when dark variable is changed as useEffect is to be called only when object values are changed not object reference
  const themeStyles = useMemo(() => ({
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }), [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles])

  return (
    <>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

const slowFunction = (num) => {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 1000000000; i++){}
  return num * 2;
} 

export default App;