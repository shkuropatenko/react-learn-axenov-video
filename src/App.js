import Header from "./Header";
import {useState} from "react";

function App() {
  const [user, setUser] = useState({
    name: 'Dima',
    age: 32,
    email: 'mail@gmail.com',
  });

  const changeUserName = (el) => {
    el.preventDefault();
    const username = el.target.username.value;
    const lastName = el.target.lastName.value;
    setUser({ ...user, name: username, lastName: lastName})
  }

  const clickHendler = () => {
    alert('GAGAGHAGGAGAG')
  }

  console.log('RENDER PAGE')

  return (
    <div className="App">
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>
      <p>lastName: {user.lastName}</p>
      <button onClick={clickHendler}>GAGAGGA</button>
      <form onSubmit={changeUserName}>
        <input name='username' placeholder="Enter new user username" />
        <input name='lastName' placeholder="Enter new user lastName " />
        <button>Change</button>
      </form>
    </div>
  );
}

export default App;
