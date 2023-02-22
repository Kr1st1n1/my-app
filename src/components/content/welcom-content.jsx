import React, {useState} from 'react';
import '../../styles/content/welcom-content/welcome-block.css';
import '../../styles/content/projects-content/projects.css';
import Card from '../card/card';
import Data from '../../data';
import Footer from './footer';

const WelcomContent = () => {
  const [active, setActive] = useState('firstCard');

  return (
    <>
    <div className='content-main'>
      <div className='main-content_welcome'>
        <div>
          {active === "firstCard" && <Card data={Data} cardIndex={0} title="1"/>}
          {active === "secondCard" && <Card data={Data} cardIndex={1} title="2"/>}
          {active === "thirdCard" && <Card data={Data} cardIndex={2} title="3"/>}
          {active === "fourthCard" && <Card data={Data} cardIndex={3} title="4"/>}
          {active === "fifthCard" && <Card data={Data} cardIndex={4} title="5"/>}
        </div>
      </div>

        <div className='main-content_project'>
        <div className='label-text_block'>
          <h2>Projects</h2>
        </div>
        <div className='list_block'>
          <div className='wrapper'>
          <button onClick={() => setActive("firstCard")}><a href="/#"> <span>Lorem ipsum</span> </a></button>
          <button onClick={() => setActive("secondCard")}><a href="/#"> <span>Lorem ipsum</span> </a></button>
          <button onClick={() => setActive("thirdCard")}><a href="/#"> <span>Lorem ipsum</span> </a></button>
          <button onClick={() => setActive("fourthCard")}><a href="/#"> <span>Lorem ipsum</span> </a></button>
          <button onClick={() => setActive("fifthCard")}><a href="/#"> <span>Lorem ipsum</span> </a></button>
        </div>
        </div>
      </div>
    </div>
    <div>
          <Footer/>
      </div>
    </>
  )
}

export default WelcomContent;
