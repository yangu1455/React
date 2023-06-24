import './App.css';
import Counter from './Counter';

function App() {
  let name = '채형원';

  return (
    <div className="App">
      <h2>{name} 최고...</h2>
      <Counter />
    </div>
  );
}

export default App;
