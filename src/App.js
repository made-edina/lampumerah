import './App.css';
import { useState } from 'react';

function App() {
  const [gantiwarna, setGantiWarna] = useState('red')

  function pencet() {
    setGantiWarna(prevColor => {
      if (prevColor ==='red') {
        return 'green'
      } else if (prevColor === 'green') {
        return 'yellow'
      } else {
        return 'red'
      }
    })
  }
  return (
    <div>
      <h1>lampu</h1>
      <button className={gantiwarna} onClick={pencet}></button>
    </div>
  );
}

export default App;
