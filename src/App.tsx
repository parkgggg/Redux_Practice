import React from 'react';
import './App.css';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({value, onIncrement, onDecrement}: Props) {
  return (
    <div className="App">
      {/* 스토어에 (Number, []) 형태로 저장되어잇기 때문에 value로 바로 렌더링할 수 는 없음 value.todos || value.counter로 접근 가능*/}
      {/* Clicked:  {value}times */}
      
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
