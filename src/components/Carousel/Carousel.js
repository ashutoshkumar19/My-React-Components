import React, { useEffect, useState } from 'react';
import './Carousel.scss';

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
  const [state, setState] = useState(initialState);

	const [isMouseEnter, setIsMouseEnter] = useState(false);

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

	const handleMouseEvent = value => {
    if (value === 1) {
      setIsMouseEnter(true);
    } else {
      setIsMouseEnter(false);
    }
  };

  const handleRightControl = () => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setState({ ...state, [i]: false, [(i + 1) % count]: true });
      }
    }
  };
  const handleLeftControl = () => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setState({ ...state, [i]: false, [(i - 1 + count) % count]: true });
      }
    }
  };

  const handleDot = index => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setState({ ...state, [i]: false, [index]: true });
      }
    }
  };

  useEffect(() => {
    if (props.timer && props.timer > 0 && !isMouseEnter) {
      let timer = setInterval(function() {
        handleRightControl();
      }, props.timer);
      return () => {
        clearInterval(timer);
      };
    }
  }, [state, isMouseEnter]);

  return (
    <div className='carousel'
			onMouseEnter={() => handleMouseEvent(1)}
      onMouseLeave={() => handleMouseEvent(0)}
    >
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
