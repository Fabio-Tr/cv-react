import { useState } from "react";

import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {

/*   const [text, setText] = useState("Cliccami");

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
  ); */



return (
<>

<Navbar/>
<Masthead/>
<Curriculum/>
<Projects/>
<Footer/>
</>

)






}

export default App;
