import { useState } from "react";
import Button from "./components/Button";

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
    </div>
  );
}

export default App;
