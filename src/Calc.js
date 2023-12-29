import "./Calc.css";
import robotSound from './sound/robot-sound.mp4';
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

  const btnData = [
    {val: ['1', '2', '3', '+']},
    {val: ['4', '5', '6', '-']},
    {val: ['7', '8', '9', '*']},
  ];

  const playAudio = () => {
   var audio = new Audio((robotSound));
   audio.play();
  };

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
    playAudio();
  };
        //handleClick handles the click event when a button is pressed. 
        //It updates the display state by appending 
        //the clicked value to the existing value.

  const calculateResult = () => {
    handleClick();
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
    handleClick();
    setDisplay('');
  };
        //clearDisplay clears the input field by resetting the display state 
        //to an empty string.

  return (
    <div className="calc-parent">
      <div className="calc-child">
        <input type="text" value={display} readOnly />
      </div>
        {btnData.map((btnRow, rowIndex) => (
          <div className="calc-child" key={rowIndex}>
            {btnRow.val.map((val, colIndex) => (
              <button key={colIndex} onClick={() => handleClick(val)}>
                {val}
              </button>
            ))}
          </div>
        ))}
      <div className="calc-child">
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button style={{backgroundColor: "red"}} onClick={clearDisplay}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
      <div className="calc-child">
        <button style={{width: 200, fontSize: 40}} onClick={calculateResult}>=</button>
      </div>
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
