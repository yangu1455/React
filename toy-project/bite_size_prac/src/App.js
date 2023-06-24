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

  return (
    <div className="App">
      <MyHeader/>
      <h2>{name} 최고...</h2>
      <b style={im_style.im_text} id="bold_text">overdrive 앨범 맛집</b>
      <Counter />
      <MyFooter/>
    </div>
  );
}

export default App;
