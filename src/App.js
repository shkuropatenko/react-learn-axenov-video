import Header from "./Header";
import { useState } from "react";

const users = [
  {id: 1, name: 'Petya'},
  {id: 2, name: 'Vasya'},
  {id: 3, name: 'Stepa'}
]

const Form = ({isShow, clickName}) => {
  if(!isShow) {
    return null;
  }
  return users.map(({id, name}) => <p onClick={clickName} key={id}>{name}</p>)
}

function App() {
  const [isShow, setIsShow] = useState(false);

  const changeIsShow = () => {
    setIsShow(!isShow)
  }

  const clickName = (event) => {
    console.log(event.target)
    event.target.style='background: red'
  }

  return (
    <div className="App">
      <h1>Hello App</h1>
      <button onClick={changeIsShow}>Show Form</button>
      <Form isShow={isShow} clickName={clickName } />
    </div>
  );
}

export default App;
