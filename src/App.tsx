import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({value, onIncrement, onDecrement}: Props) {
  return (
    <div className="App">
      Clicked:  {value}times
      
      {/* 클릭하면 onIncrement(state+1 액션을 디스패치하는 함수) 콜 */}
      <button onClick={onIncrement}>
        +
      </button>      
      {/* 클릭하면 onDecrement(state-1 액션을 디스패치하는 함수) 콜 */}
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  
  );
}

export default App;
