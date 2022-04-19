import React from 'react';
import './App.css';
import P from './Components/Personal information/P';
import E from './Components/Educational Experience/E';
import W from './Components/Work Experience/W';

function App() {
  return (
    <div className="App">
      <P/>
      <E/>
      <W/>
    </div>
  );
}

export default App;
