import React from "react";
import './styles/layouts/layout.css';
import './styles/abstracts/global.css';
import MainContent from './components'

function App() {
  return (
    <div className="container-main"> 
    {<img style={{ position: 'absolute', top:'-27px', 'z-index':'9999', 'pointer-events': 'none', 
  opacity:0.4, transform: 'translateX(-50%)', left: '747px'}} alt="aa" src='../fiksavimas.jpg'></img> }
      <MainContent></MainContent>
    </div>
  );
}

export default App;
