import React, { Fragment } from 'react';
import DummyCard from './DummyCard';
import './SliderContainer.scss';

function SliderContainer() {
  var content, cardWidth;

  const handleScroll = string => {
    if (!content || !cardWidth) {
      content = document.getElementById('slider-card-container');
      cardWidth = document.getElementsByClassName('dummy-card')[0].offsetWidth;
    }
    if (string === 'left') {
      content.scrollLeft -= 2 * cardWidth;
    } else {
      content.scrollLeft += 2 * cardWidth;
    }
  };

  // To be Removed
  const list = [];
  for (var i = 0; i < 15; i++) {
    list.push(i);
  }

  return (
    <Fragment>
      <div className='slider-card-container' id='slider-card-container'>
        {list.map(i => (
          <DummyCard />
        ))}
      </div>

      <div className='scroll-control control-left'>
        <i className='fas fa-chevron-left' onClick={() => handleScroll('left')}></i>
      </div>
      <div className='scroll-control control-right'>
        <i className='fas fa-chevron-right' onClick={() => handleScroll('right')}></i>
      </div>
    </Fragment>
  );
}

export default SliderContainer;
