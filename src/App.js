// @ts-nocheck

import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./actions"


function App() {
  
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div>Counter is {counter}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
