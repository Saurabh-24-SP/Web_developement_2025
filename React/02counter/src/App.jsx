import { useState } from "react"; // import useState hooks.

import "./App.css";
//UI updation controle by the react.

function App() {
  // useState(pass inital parameter) hooks are return the two value in array formate. First is variable name another is  function which is responsible for updation of  first variable (counter).counter variable is update/propagate everywhere at a time.first time jo value pass karenge useState() hooks me whi counter ki initial value hogi.

  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    console.log("value added: " + counter);
    // counter=counter+1;
    // setCounter(counter)
    setCounter(counter + 1);
    if (counter >= 20) {
      setCounter(20);
      alert("Maximum counter value is 20");
    }
  };
  const removeValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
      alert("Minimum counter value is 0");
    }
  };
  return (
    <>
      <h1> React Counter  </h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
