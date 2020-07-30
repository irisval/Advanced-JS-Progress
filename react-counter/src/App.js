import React, { useState } from 'react';
import ButtonOne from './components/ButtonOne';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(5);
  const [btOne, setBtOne] = useState(1);
  const [btTwo, setBtTwo] = useState(10);
  const [btThree, setBtThree] = useState(100);
  const [btFour, setBtFour] = useState(1000);


  const incrementCount = (increment) => {
    setCount(count + increment);
  }

  // TODO: Clean up below after learning how to do it
  const incrementInnerOne = (increment) => {
    setBtOne(increment + count);
  }
  const incrementInnerTwo = (increment) => {
    setBtTwo(increment + count);
  }
  const incrementInnerThree = (increment) => {
    setBtThree(increment + count);
  }
  const incrementInnerFour = (increment) => {
    setBtFour(increment + count);
  }

  return (
    <div className="App">
    <ButtonOne increment={1} onClickFunction={incrementCount}/>
    <ButtonOne increment={10} onClickFunction={incrementCount}/>
    <ButtonOne increment={100} onClickFunction={incrementCount}/>
    <ButtonOne increment={1000} onClickFunction={incrementCount}/>
    <span>{count}</span>
    <br />
    {/* TODO: Clean up below after learning how to do it */}
    <ButtonOne increment={btOne} onClickFunction={incrementInnerOne}/>
    <ButtonOne increment={btTwo} onClickFunction={incrementInnerTwo}/>
    <ButtonOne increment={btThree} onClickFunction={incrementInnerThree}/>
    <ButtonOne increment={btFour} onClickFunction={incrementInnerFour}/>
    </div>
    );
}

export default App;
