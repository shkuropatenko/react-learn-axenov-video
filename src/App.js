import Header from "./Header";
import { useState } from "react";
import fields from './fields.json';

const List = () => fields.map((field) => <input key={field.id} type={field.type} name={field.name} placeholder={field.placeholder} />)

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
      <List />
    </div>
  );
}

export default App;
