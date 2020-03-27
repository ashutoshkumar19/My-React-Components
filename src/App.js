import React from 'react';
import './styles/App.scss';
import Carousel from './components/Carousel/Carousel';
import ProductCard from './components/ProductCard/ProductCard';
import StoreCard from './components/StoreCard/StoreCard';
import SliderContainer from './components/ContainerWithSlider/SliderContainer';
import SelectBox from './components/SelectBox/SelectBox';

function App() {
  const list = [];
  for (var i = 0; i < 3; i++) {
    list.push(i);
  }
  const store_list = [];
  for (var j = 0; j < 2; j++) {
    store_list.push(j);
  }
  return (
    <div className='main-body'>
      <div className='carousel-container'>
        <h3 className='heading'>Carousel</h3>
        <Carousel
          slides={[
            'https://www.capturelandscapes.com/wp-content/uploads/2018/05/Seceda-sunrise-960.jpg',
            'https://www.tourmyindia.com/luxury-train-tours/wp-content/uploads/2018/08/Khajuraho.jpg',
            'https://bhagyashritravels.com/wp-content/uploads/2017/12/sun-temple-konark-head-466.jpeg',
            'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/08/oia-windmill-blue-hour-sunrise-composite.jpg',
            'https://i.pinimg.com/originals/37/a9/06/37a906be8bd465bb52f092f3f89f9def.jpg',
            'https://images8.alphacoders.com/593/593421.jpg'
          ]}
          links={[
            'https://www.google.com',
            'https://www.google.com',
            'https://www.google.com',
            'https://www.google.com',
            'https://www.google.com',
            'https://www.google.com'
          ]}
          timer={6000}
        />
      </div>

      <div className='product-card-container'>
        <h3 className='heading'>Product Cards</h3>

        {list.map(i => (
          <ProductCard
            images={[
              'https://cdn.newday.mk/uploads/2018/08/395142931-1.jpg',
              'https://www.atsshopping.com/images/products/1551089542.jpg',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEyTmpTYLSyB9xNE7LYkVWDCU6xIG2R8T4Ed_lsGe6Jb6gtGm3',
              'https://5.imimg.com/data5/VT/DA/MY-15780217/troops-tp-7040-extra-bass-headphone-500x500.jpg'
            ]}
            key={i}
            id={'id'}
            title={'Hisonic 400 Super Extra Bass Bluetooth Headset with microphone'}
            productLink={'#!'}
            currency={'₹'}
            price={'1499 - 1999'}
            oldPrice={'2500'}
            discount={'50'}
            rating={'4.5'}
            soldCount={'2463'}
            storeName={'Hisonic Store'}
            storeLink={'https://www.google.com'}
            timer={3000}
          />
        ))}
      </div>

      <div className='store-card-container'>
        <h3 className='heading'>Store Cards</h3>
        <StoreCard
          key={i}
          id={i}
          images={[
            'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/homedecor-1526358274.jpg',
            'https://katerinasgift.files.wordpress.com/2014/10/213.jpg',
            'https://www.woodenstreet.com/images/home-decor/mobile-banner.jpg'
          ]}
          productLinks={[
            'https://www.google.com',
            'https://www.amazon.com',
            'https://www.youtube.com'
          ]}
          storeLogo={''}
          storeName={'Hisonic Shenzen Bay Area Distributers Hisonic Shenzen Bay Area Distributers'}
          storeLink={'https://www.google.com'}
          rating={'4.5'}
          categoryList={['Electronics', 'Audio', 'Lifestyle', 'Sports Wear', 'Bluetooth']}
          categoryCode={Math.floor(Math.random() * 13)}
        />
        {store_list.map(i => (
          <StoreCard
            key={i}
            id={i}
            images={[
              'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/homedecor-1526358274.jpg',
              'https://katerinasgift.files.wordpress.com/2014/10/213.jpg',
              'https://www.woodenstreet.com/images/home-decor/mobile-banner.jpg'
            ]}
            productLinks={[
              'https://www.google.com',
              'https://www.amazon.com',
              'https://www.youtube.com'
            ]}
            storeLogo={
              'https://image.freepik.com/free-vector/organic-store-logo-design-inspiration_18099-270.jpg'
            }
            storeName={'Brooklyn Home Decor & Design Store'}
            storeLink={'https://www.google.com'}
            rating={'4.5'}
            categoryList={['Home Decor', 'Lifestyle', 'Furniture']}
            categoryCode={Math.floor(Math.random() * 13)}
          />
        ))}
      </div>

      <div className='container-with-slider'>
        <SliderContainer />
      </div>

      <div className='select-box-div'>
        <SelectBox
          options={[
            'All Categories',
            "Women's Clothing",
            "Men's Clothing",
            'Cellphones & Telecommunications',
            'Computer & Office',
            'Consumer Electronics',
            'Jewelry & Accessories',
            'Home & Garden',
            'Luggage & Bags',
            'Shoes',
            'Mother & Kids',
            'Sports & Entertainment',
            'Beauty & Health',
            'Watches',
            'Toys & Hobbies',
            'Weddings & Events',
            'Novelty & Special Use',
            'Automobiles & Motorcycles',
            'Lights & Lighting',
            'Furniture',
            'Electronic Components & Supplies',
            'Education & Office Supplies',
            'Home Appliances',
            'Home Improvement',
            'Food',
            'Security & Protection',
            'Tools',
            'Hair Extensions & Wigs',
            'Apparel Accessories',
            'Underwear & Sleepwears'
          ]}
          showSearchBox={false}
        />
      </div>
    </div>
  );
}

export default App;
