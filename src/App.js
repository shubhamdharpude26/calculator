import React, { useState } from "react";
import "./Component/Button.css";
import "./Component/Display.css";
import "./App.css";

function App() {
  
  //Inital State
  const [result, setResult] = useState("");

  // It will handle the click events
  function handleClick(e) {
    setResult(result.concat(e.target.value));
  }

  // It will handle the keyPress events
  window.onkeydown = function (e) {
    const keyCode = e.key;

    if (keyCode !== "Enter") {
      setResult(result.concat(keyCode));
    } else {
      calculate();
    }
  };

  // It will handle the backspace functionality
  function backspace() {
    // if (result === "") {
    //   setResult("");
    // } else {
    //   setResult(result.slice(0, result.length - 1));
    // }
      if(result !== "")
      {
        setResult(result.slice(0, result.length - 1));
      }
  }

  // It will help us to clear the result
  function clearBtn() {
    setResult("");
  }

  function calculate() {
    try {
      //eslint-disable-next-line
      setResult(Math.floor(eval(result).toString())); // the Math.floor will help the result to round the nearest value
    } catch (error) {
      setResult("Error"); // if their is any Invaild output/result, this will through an error
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator-wrapper">
        <div className="display">
          <div className="result">{result}</div>
        </div>
        <div className="row">
          <button className="button clearBtn" onClick={clearBtn}>C</button>
          <button className="button operator" onClick={handleClick} value="%">%</button>
          <button className="button operator" onClick={backspace}>&larr;</button>
          <button className="button operator" onClick={handleClick} value="/">/</button>
        </div>
        <div className="row">
          <button className="button" onClick={handleClick} value="7">7</button>
          <button className="button" onClick={handleClick} value="8">8</button>
          <button className="button" onClick={handleClick} value="9">9</button>
          <button className="button operator" onClick={handleClick} value="*">*</button>
        </div>
        <div className="row">
          <button className="button" onClick={handleClick} value="4">4</button>
          <button className="button" onClick={handleClick} value="5">5</button>
          <button className="button" onClick={handleClick} value="6">6</button>
          <button className="button operator" onClick={handleClick} value="-">-</button>
        </div>

        <div className="row">
          <button className="button" onClick={handleClick} value="1">1</button>
          <button className="button" onClick={handleClick} value="2">2</button>
          <button className="button" onClick={handleClick} value="3">3</button>
          <button className="button operator" onClick={handleClick} value="+">+</button>
        </div>

        <div className="row">
          <button className="button" onClick={handleClick} value="00">00</button>
          <button className="button" onClick={handleClick} value="0">0</button>
          <button className="button" onClick={calculate}>=</button>
          <button className="button" onClick={handleClick} value=".">.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
