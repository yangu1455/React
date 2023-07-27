import React from 'react';

// 컴포넌트는 첫글자 무조건 대문자로 작성해야한다!
function Product({url, alt, name, price}) {
  // 객체 구조 분해 할당 (비구조화 할당) 으로 명세를 해줌
  return (
    <div>
      <img src={url} alt={alt}/>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

export default Product;