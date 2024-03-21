import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'; //createStore보다는 redux toolkit을 사용하는 방법으로 스토어를 생성하는 것이 권장되지만, 여기선 기초를 먼저 배우기 위해 createStore 먼저 배운다.
import counter from './reducer'; //만들어놓은 리듀서 불러오기

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//스토어에 리듀서 넣기 및 스토어 생성
const store = createStore(counter);

const render = () => root.render(
  <React.StrictMode>
    <App 
      // 현재 상태 트리를 반환
      value={store.getState()}
      // 액션을 디스패치 시켜주는 콜백
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    /> 
  </React.StrictMode>
);
//함수형 컴포넌트로 바꿨으니까 호출해줘야됨.
render();

//Action이 dispatch 될 때마다 리스너 함수(여기선 render)가 호출되도록 설정
store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
