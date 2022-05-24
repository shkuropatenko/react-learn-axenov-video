import Header from "./Header";
import { useState } from "react";

const Form = (props) => {
  if(!props.isShow) {
    return null;
  }
  return <h3>Render my Form</h3>
}

function App() {
  const [isShow, setIsShow] = useState(false);
  const changeIsShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="App">
      <h1>Hello App</h1>
      <button onClick={changeIsShow}>Show Form</button>
      <Form isShow={isShow} />
    </div>
  );
}

export default App;
