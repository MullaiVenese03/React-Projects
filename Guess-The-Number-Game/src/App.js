import { useState } from 'react';
import './App.css';
import Result from './Result.js';

const secretNumber = Math.floor(Math.random() * 10) + 1;

function App() {

  const [ term, setTerm ] = useState("");

  const handleChange = (e) => {
  setTerm(e.target.value)
  }
  
  return (
    <>
    <div className='header' >
      <h1>Guess The Number Game</h1>
    </div>

    <div className="App">
      <div className="container" >
        <div className="content" >
          <h3>Guess The Number 1 to 10</h3>
          <input id="term" type="text" name="term" onChange={handleChange} autoFocus/>
          <Result term={term} secretNum={secretNumber} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
