import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let message = "Counter is 5";
  let [counter, setCounter] = useState(5);
  //let counter = 5

  const addValue = () => {
    //counter++;
    //counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    //console.log(counter);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    console.log(counter);
  };

  const removeValue = () => {
    //counter--;
    if (counter <= 0) {
      counter = counter;
      //msg = `Counter should not be less than {counter}`;
    } else {
      counter = counter - 1;
    }
    setCounter(counter);
    //console.log(counter);
  };

  return (
    <>
      <h1>BH and react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Tip: {counter}</p>
    </>
  );
}

export default App;
