import './App.css';
import Button from './components/button'
import Counter from './components/counter'
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0)

  const handleClick = () => {
    setNumClicks(numClicks + 1)
  }

  const resetCounter = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='container'>
        <Counter numClicks={numClicks} />
        <Button text='Click' isClick={true} handleClick={handleClick} />
        <Button text='Restart' isClick={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
