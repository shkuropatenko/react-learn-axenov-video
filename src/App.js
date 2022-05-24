import Header from "./Header";
import {useState} from "react";

function App() {
  const [user, setUser] = useState({
    name: 'Dima',
    age: 32,
    email: 'mail@gmail.com',
  });

  const onChangeName = (event) => {
    const value = event.target.value;
    if (/^[a-z]{1,25}$/.test(value)) {
      setUser({...user, name: value})
    } else {
      alert('your data is not correct')
    }
    console.log(value)
  }

  console.log('RENDER APP COMPONENT')
  const {name, age, email, lastName} = user;

  return (
    <div className="App">
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>email: {email}</p>
      <p>lastName: {lastName}</p>
      <input value={name} onChange={onChangeName} />
    </div>
  );
}

export default App;
