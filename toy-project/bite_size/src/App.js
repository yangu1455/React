// 로고 파일 강사님은 지우셨는데 난 import 주석표시만 하겠음
// import logo from './logo.svg';
// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';

function App() {

  return (
    <div>
      <MyHeader/>
      <Counter/>
      <MyFooter/>
    </div>
  );
}

export default App;
