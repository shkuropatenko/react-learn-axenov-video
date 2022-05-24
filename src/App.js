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
    const key = event.target.name;

    setUser({...user, [key]: value})
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
      <input name='name' value={name} onChange={onChangeName} />
      <input name='email' type='email' value={email} onChange={onChangeName} />
      <input name='age' type='number' value={age} onChange={onChangeName} />
    </div>
  );
}

export default App;
