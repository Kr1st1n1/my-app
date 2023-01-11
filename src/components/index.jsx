import React from 'react';
import Content from './content/index';
import '../styles/layouts/layout.css';

const MainContent = () => {
  return (
    <div className='content-container'>
      
      <Content></Content>
      <div class="dec-left"></div>
      <div class="dec-right"></div>
    </div>
  )
}

export default MainContent;
