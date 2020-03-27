import React, { useEffect, useState } from 'react';
import './ProductCard.scss';

function ProductCard(props) {
  const count = props.images.length;
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
        <img src={props.images[i]} alt={props.productLink} />
      </div>
    );
    dot_items.push(<span key={i} className={state[i] ? 'dot active' : 'dot'}></span>);
  }

  const changeSlide = () => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setState({ ...state, [i]: false, [(i + 1) % count]: true });
        break;
      }
    }
  };
  const resetSlide = () => {
    for (let i = 0; i < count; i++) {
      if (state[i]) {
        setState({ ...state, [i]: false, 0: true });
        break;
      }
    }
  };

  const handleMouseEvent = value => {
    if (value === 1) {
      setIsMouseEnter(true);
    } else {
      setIsMouseEnter(false);
      resetSlide();
    }
  };
  useEffect(() => {
    if (props.timer && props.timer > 0 && isMouseEnter) {
      let timer = setInterval(function() {
        changeSlide();
      }, props.timer);
      return () => {
        clearInterval(timer);
      };
    }
  }, [state, isMouseEnter]);

  return (
    <div className='card-product'>
      <div className='card-top'>
        <div className='dots-container' style={isMouseEnter ? { opacity: '1' } : { opacity: '0' }}>
          {dot_items}
        </div>
        <div className='wishlist-icon-container' title='Add to wishlist'>
          <span className='fas fa-heart wishlist-icon'></span>
        </div>
      </div>
      <div
        className='card-middle'
        onMouseEnter={() => handleMouseEvent(1)}
        onMouseLeave={() => handleMouseEvent(0)}
      >
        <a href={props.productLink} target='_blank' rel='noopener noreferrer'>
          <div className='slideshow-container'>{slide_items}</div>
        </a>
      </div>

      <div className='card-bottom'>
        <div className='item-name' title={props.title}>
          <a href={props.productLink} target='_blank' rel='noopener noreferrer'>
            {props.title}
          </a>
        </div>

        <div className='price-container'>
          <div className='price'>
            <span className='cur'>{props.currency}</span>
            <span className='value'>{props.price}</span>
          </div>

          {props.oldPrice && (
            <div className='price-slash'>
              <span className='cur'>{props.currency}</span>
              <span className='value'>{props.oldPrice}</span>
            </div>
          )}

          {props.discount && (
            <span className='discount'>
              <span className='value'>{props.discount}</span>
              <span>% Off</span>
            </span>
          )}
        </div>

        <div className='item-statistics'>
          {props.rating && (
            <span className='star-ratings'>
              <span className='star fas fa-star'></span>
              <span className='rating'>{props.rating}</span>
            </span>
          )}

          {props.soldCount && (
            <div className='sold-count'>
              <span className='value'>{props.soldCount}</span>
              Sold
            </div>
          )}
        </div>

        {props.storeName && (
          <div className='store-name'>
            <a href={props.storeLink} target='_blank' rel='noopener noreferrer'>
              {props.storeName}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
