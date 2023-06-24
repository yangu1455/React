import React from 'react';
import './App.css';
import Counter from './Counter';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
  let name = '채형원';

  return (
    <div className="App">
      <MyHeader/>
      <h2>{name} 최고...</h2>
      <b id="bold_text">overdrive 앨범 맛집</b>
      <Counter />
      <MyFooter/>
    </div>
  );
}

export default App;
