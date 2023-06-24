import React from 'react';
import './App.css';
import Counter from './Counter';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';

function App() {
  let name = '채형원';

  const im_style = {
    im_text: {
      color: "blueviolet",
    },
  };

  const func = () => {
    return 'true'
  }

  const number = 5;

  return (
    <div className="App">
      <MyHeader/>
      <h2>{name} 최고의 동그라미... {100+15} {true}{func()} {"love"}</h2>
      <b style={im_style.im_text} id="bold_text">overdrive 앨범 맛집</b>
      <br/>
      <b style={im_style.im_text} id="bold_text">
        {number}는? {number % 2 === 0 ? '짝수' : '홀수'}
      </b>
      <Counter />
      <MyFooter/>
    </div>
  );
}

export default App;
