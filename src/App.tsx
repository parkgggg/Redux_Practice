import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducer';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState("");
  //useState에 선언한다고 store에 저장되는 것이 아님. dispatch를 통해 store에 저장하는 단계 필요
  const dispatch = useDispatch();

  //useSelector 훅을 사용해 Store에 접근하고 값을 가져올 수 있다.
  const todos: string[] = useSelector((state: RootState) => state.todos)
  const counter = useSelector((state: RootState) => state.counter)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //"ADD_TODO"Action을 실질적으로 Dispatch 해준다
    dispatch({type: "ADD_TODO", text: todoValue})
    setTodoValue("");
  }




  return (
    <div className="App">
      {/* 스토어에 (Number, []) 형태로 저장되어잇기 때문에 value로 바로 렌더링할 수 는 없음 value.todos || value.counter로 접근 가능*/}
      Clicked:  {counter}times

      {/* 클릭하면 onIncrement(state+1 액션을 디스패치하는 함수) 콜 */}
      <button onClick={onIncrement}>
        +
      </button>
      {/* 클릭하면 onDecrement(state-1 액션을 디스패치하는 함수) 콜 */}
      <button onClick={onDecrement}>
        -
      </button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>

  );
}

export default App;
