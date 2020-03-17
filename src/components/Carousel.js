import React, { useEffect, useState } from 'react';
import '../styles/Carousel.scss';

function Carousel(props) {
  const count = props.slides.length;
  const initialState = {};

  const slide_items = [];
  const dot_items = [];
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      initialState[i] = true;
    } else {
      initialState[i] = false;
    }
  }
  const [state, setstate] = useState(initialState);

  for (let i = 0; i < count; i++) {
    slide_items.push(
      <div key={i} className={state[i] ? 'slide active' : 'slide'}>
        <a href={props.links[i]} target='_blank' rel='noopener noreferrer'>
          <img src={props.slides[i]} alt='' />
        </a>
      </div>
    );
    dot_items.push(
      <div key={i} className={state[i] ? 'dot active' : 'dot'} onClick={() => handleDot(i)}></div>
    );
  }

  const handleDot = index => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setstate({ ...state, [i]: false, [index]: true });
      }
    }
  };

  const handleRightControl = () => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setstate({ ...state, [i]: false, [(i + 1) % count]: true });
      }
    }
  };
  const handleLeftControl = () => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setstate({ ...state, [i]: false, [(i - 1 + count) % count]: true });
      }
    }
  };

  useEffect(() => {
    if (props.timer && props.timer > 0) {
      let timer = setInterval(function() {
        handleRightControl();
      }, props.timer);
      return () => {
        clearInterval(timer);
      };
    }
  }, [state]);

  return (
    <div className='carousel'>
      <div className='slides-container'>{slide_items}</div>

      <div className='control control-left' onClick={() => handleLeftControl()}>
        <i className='fas fa-chevron-circle-left'></i>
      </div>
      <div className='control control-right' onClick={() => handleRightControl()}>
        <i className='fas fa-chevron-circle-right'></i>
      </div>

      <div className='dot-container'>{dot_items}</div>
    </div>
  );
}

export default Carousel;
