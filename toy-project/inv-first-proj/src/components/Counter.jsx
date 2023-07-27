import React from 'react'
import { useState } from 'react';

export default function Counter() {

  // const [count, setCount] = useState(0);

  // const updateCount = (arg) => {
  //   setCount(count + arg);
  // }

  let count = 0;
  const updateCount = (arg) => {
    count = count + arg;
    console.log(count);
  }

  return (
    <div>
      <button onClick={() => updateCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => updateCount(+1)}>+</button>
    </div>
  )
}
