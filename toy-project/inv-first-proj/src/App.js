import React from "react";
import ProductPage from "./pages/ProductPage";
import Counter from "./components/Counter";
import List from "./components/List";
import { useState } from "react";


function App() {
  // const Button = React.createElement('button', { className: 'child-btn' }, '버튼');
  // const Wrapper = React.createElement('div', { className: 'wrapper' }, Button);

  // return Wrapper;

  // const name = "Charles";
  // const fruits = ['apple', 'banana', 'orange'];

  // return (
  //   <div>
  //     <div>
  //       <button>{name}</button>
  //       <ul>
  //         {fruits.map((f) => <li>{f}</li>)}
  //       </ul>
  //     </div>

  //     <ProductPage/>
  //     <Counter/>
  //   </div>
  // );

  // // number
  // const [num, setNum] = useState(0);

  // // string
  // const [name, setName] = useState('');

  // // boolean
  // const [IsChecked, setIsChecked] = useState(false);

  return (
    // <div>
    //   <input
    //     type="number"
    //     value={num}
    //     onChange={(e) => setNum(e.target.value)}  
    //   />
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)} 
    //   />
    //   <input
    //     type="checkbox"
    //     value={IsChecked}
    //     onChange={(e) => setIsChecked(e.target.checked)} 
    //   />
    //   {IsChecked ? <span>체크됨</span> : <span>체크안됨</span>}
    // </div>

    <List/>
  )
}

export default App;
