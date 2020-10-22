// import React, {useState} from 'react';
import React from 'react';
import './App.css';


import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Soma from './components/Soma'
import Sorteio from './components/Sorteio'


function App() {

  // hook => useState
  // const [min, setMin] = useState(10)
  // const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>Math React-Redux (Simple)</h1>
      <div className="linha">
        <Intervalo />
        {/* <Intervalo min={min} max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        /> */}
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
      {/* <div className="linha">
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div> */}
    </div>
  );
}

export default App;
