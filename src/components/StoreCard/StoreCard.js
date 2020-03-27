import React from 'react';
import './StoreCard.scss';

function StoreCard(props) {
  return (
    <div className='card-store'>
      <div className='wishlist-icon-container' title='Add to favourite stores'>
        <span className='fas fa-heart wishlist-icon'></span>
      </div>

      <div className='card-body'>
        <div className='img-col-1'>
          <img src={props.images[0]} alt={props.images[0]} />
        </div>
        <div className='img-col-2'>
          <div className='img-container-2'>
            <img src={props.images[1]} alt={props.images[1]} />
          </div>
          <div className='img-container-3'>
            <img src={props.images[2]} alt={props.images[2]} />
          </div>
        </div>
      </div>

      <div className='card-bottom'>
        <div className='cb-1'>
          <div className='store-logo'>
            {props.storeLogo.length > 0 ? (
              <img src={props.storeLogo} alt={props.storeLogo} />
            ) : (
              <img
                src='https://cdn1.iconfinder.com/data/icons/big-business/512/Store-512.png'
                alt='https://cdn1.iconfinder.com/data/icons/big-business/512/Store-512.png'
              />
              // <img src={StoreLogo} alt={StoreLogo} />
              // <span class='material-icons'>storefront</span>
            )}
          </div>
          <div className='store-name' title={props.storeName}>
            <a href={props.storeLink} target='_blank' rel='noopener noreferrer'>
              {props.storeName}
            </a>
          </div>
          <a
            href={props.storeLink}
            className='store-link-btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit Store
          </a>
        </div>

        <div className='cb-2'>
          {props.categoryList.length > 0 && (
            <div className='store-category'>
              {props.categoryList.map(item => (
                <p>{item}</p>
              ))}
            </div>
          )}

          {props.rating && (
            <span className='star-ratings'>
              <span className='star fas fa-star'></span>
              <span className='rating'>{props.rating}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoreCard;
