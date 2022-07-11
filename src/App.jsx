import { useContext } from "react";
import UserContext from "./contexts/user/userContext";

const App = () => {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <h1>Homepage {user.age}</h1>
      <button 
        onClick={user.happyBirthday}
        style={{
          padding: "1em"
        }}
      >
        +
      </button>
    </div>
  )
}

export default App;