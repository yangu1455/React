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


function Counter1() {
  const [ccount, setCCount] = useState(0);

  const plusNumber = () => {
    setNumber(number + 1);
    // 콘솔로그를 setter 함수 직후에 이런식으로 이벤트 핸들러 안에서 찍으면
    // state 값이 한단계씩 밀려서 출력이 된다.
    // 그 이유는 state가 업데이트 되는 것이
    // 이벤트 핸들러 함수 내의 코드가 모두 실행된 후에
    // state 변경 사항을 모은 후 일괄적으로 업데이트 하기 때문이다. (batch 처리 = 일괄 처리)
    console.log(number);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={plusNumber}>+1</button>
    </>
  )
}