import { useState } from "react";
import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Form from "./components/Form";

function App() {
  const [text, setText] = useState("Cliccami");

  function handleClick(){
    setText("Bravo")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning React</h1>
      </header>
      <Button text={text} handleClick={handleClick} />
      
      <ButtonClass/>

      <Form/>
    </div>
  );
}

export default App;
