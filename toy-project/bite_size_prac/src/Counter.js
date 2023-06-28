import React, {useState} from "react";

const Counter = (props) => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  console.log(props);

  const [count, setCount] = useState(0);

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
    </div>
  );
};

export default Counter;