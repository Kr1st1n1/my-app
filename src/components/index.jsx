import React from 'react';
import Content from './content/index';
import '../styles/layouts/layout.css';

const MainContent = () => {
  return (
    <div className='content-container'>
      
      <Content></Content>
      <div class="dec-left">
        <div class="inner"></div>
      </div>
      <div class="dec-right">
      <div class="inner-right"></div>
      </div>
    </div>
  )
}

export default MainContent;
