import React from 'react';
import './BrandCard.scss';

function BrandCard(props) {
  return (
    <div className='card-brand'>
      <div className='card-body'>
        <div className='background-img'>
          <img src={props.backgroundImage} alt={props.backgroundImage} />
        </div>
        <div className='products-img-container'>
          <a
            href={props.productLinks[0]}
            className='product-img'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={props.productImages[0]} alt={props.productImages[0]} />
          </a>
          <a
            href={props.productLinks[1]}
            className='product-img'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={props.productImages[1]} alt={props.productImages[1]} />
          </a>
          <a
            href={props.productLinks[2]}
            className='product-img'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={props.productImages[2]} alt={props.productImages[2]} />
          </a>
        </div>
      </div>

      <div className='card-bottom'>
        <div className='cb-1'>
          <div className='brand-logo'>
            {props.brandLogo.length > 0 ? (
              <img src={props.brandLogo} alt={props.brandLogo} />
            ) : (
              <img
                src='https://cdn1.iconfinder.com/data/icons/big-business/512/Store-512.png'
                alt='https://cdn1.iconfinder.com/data/icons/big-business/512/Store-512.png'
              />
              // <img src={brandLogo} alt={brandLogo} />
              // <span class='material-icons'>storefront</span>
            )}
          </div>
          <div className='brand-name' title={props.brandName}>
            <a href={props.brandLink} target='_blank' rel='noopener noreferrer'>
              {props.brandName}
            </a>
          </div>
          <a
            href={props.brandLink}
            className='brand-link-btn'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Catalogue
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
