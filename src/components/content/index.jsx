import React from 'react';
import WelcomContent from './welcom-content';
import TopContent from './top-content';
import '../../styles/content/content-block/content-block.css';

const Content = () => {
  return (
    <>
      <TopContent/>
      <div className='content-block'>
        <WelcomContent/>
      </div>
    </>
  )
}

export default Content;
