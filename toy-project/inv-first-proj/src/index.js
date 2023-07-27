import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 위의 코드를 풀어서 보면
// index.html에 있던 div(id가 'root'인)를 DOM API를 통해 가져오고
// const rootElement = document.getElementById('root');
// createRoot 메서드를 통해 해당 div를 ReactDOM의 최상위 노드로 만들어준다.
// const root = ReactDOM.createRoot(rootElement);

root.render(
  
    <App />
  
);
