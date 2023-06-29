import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

// 이렇게 비구조화 할당을 통해서 
// 이쪽 매개변수로 전달되는 props라는 객체에서 initialValue라는 값만 꺼내서 쓴 것!
const Counter = ({ initialValue }) => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  const [count, setCount] = useState(initialValue);

  const onIncrease = () => {
    setCount(count + 1);
  } 

  const onDecrease = () => {
    setCount(count - 1);
  }
  
  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}/>
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;