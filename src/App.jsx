import useLocalStorage from "./custom-hooks/useLocalStorage";

const App = () => {
  const [local, setLocal] = useLocalStorage('local', '');
  return (
    <div className="App">
      <input 
        type="text" 
        value={local} 
        onChange={(e) => {
          setLocal(e.target.value);
        }}
        style={{
          textTransform: 'capitalize'
        }}
      />
    </div>
  )
}

export default App;