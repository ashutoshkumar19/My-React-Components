import React, { Fragment, useEffect } from 'react';
import DummyCard from './DummyCard';
import './SliderContainer.scss';

function SliderContainer() {
  var sliderContainer, childWidth;

  const randomString = () => {
    var length = 10;
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  };

  const element_id = randomString();

  useEffect(() => {
    var containerHeight = document.getElementById(`slider-container-${element_id}`).offsetHeight;
    var controlElement = document.getElementsByClassName(`slider-control-${element_id}`);
    var controlHeight = controlElement[0].offsetHeight;
    var height = containerHeight / 2 + controlHeight / 2;
    controlElement[0].style.marginTop = `-${height}px`;
    controlElement[1].style.marginTop = `-${height}px`;
  }, []);

  const handleScroll = string => {
    if (!sliderContainer || !childWidth) {
      sliderContainer = document.getElementById(`slider-container-${element_id}`);
      childWidth = sliderContainer.firstChild.offsetWidth;
    }
    if (string === 'left') {
      sliderContainer.scrollLeft -= 2 * childWidth;
    } else {
      sliderContainer.scrollLeft += 2 * childWidth;
    }
  };

  // To be Removed
  const list = [];
  for (var i = 0; i < 15; i++) {
    list.push(i);
  }

  return (
    <Fragment>
      <div className='slider-card-container' id={`slider-container-${element_id}`}>
        {list.map(i => (
          <DummyCard key={i} />
        ))}
      </div>

      <div className={`scroll-control control-left slider-control-${element_id}`}>
        <i className='fas fa-chevron-left' onClick={() => handleScroll('left')}></i>
      </div>
      <div className={`scroll-control control-right slider-control-${element_id}`}>
        <i className='fas fa-chevron-right' onClick={() => handleScroll('right')}></i>
      </div>
    </Fragment>
  );
}

export default SliderContainer;
