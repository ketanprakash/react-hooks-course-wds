import UserContext from "./userContext";
import { useState } from "react";

const UserProvider = ({children}) => {
  const [name, setName] = useState("Ketan Prakash");
  const [age, setAge] = useState(21);
  const happyBirthday = () => setAge(prevAge => prevAge + 1);
  
  return (
    <UserContext.Provider value={{name, age, happyBirthday}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;