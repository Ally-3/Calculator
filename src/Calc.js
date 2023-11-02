import "./Calc.css";
import React, { useState } from 'react';
        // use of "npm install mathjs"
        //importing math object from the mathjs library
import { create, all } from 'mathjs';
const math = create(all);

const Calculator = () => {
  const [display, setDisplay] = useState('');
        //The display state variable is used to keep track of the current value 
        //shown in the input field.
        //setDisplay is a function used to update the value of display.

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };
        //handleClick handles the click event when a button is pressed. 
        //It updates the display state by appending 
        //the clicked value to the existing value.

  const calculateResult = () => {
    try {
      const result = math.evaluate(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
   };
        //math.evaluate from mathjs library
        //calculateResult is called when the equals button = is clicked.
        //evaluates the expression in display using math.js library
        //and updates the display state with the result.
        //If an error occurs during evaluation, the display will show "Error" instead. 

  const clearDisplay = () => {
    setDisplay('');
  };
        //clearDisplay clears the input field by resetting the display state 
        //to an empty string.

  return (
    <div className="calc-parent">
      <input type="text" value={display} readOnly />
      <div>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button style={{backgroundColor: "red"}} onClick={clearDisplay}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div>
        <button style={{width: 200, fontSize: 40}} onClick={calculateResult}>=</button>
      </div>
      <br />
    </div>
  );
};
  
//Each button is assigned an onClick event handler that calls the 
//handleClick function with the respective button value as an argument.

//Clicking on each number and operator button appends 
//the corresponding value to the display state.

//The +, -, *, and / buttons represent basic arithmetic operations.

//Clicking on the = button evaluates the expression in the display 
//using the math.evaluate() function and updates the display with the result. 

export default Calculator;
