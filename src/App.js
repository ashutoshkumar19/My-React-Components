import React from 'react';
import './styles/App.scss';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className='main-body'>
      <div className='carousel-container'>
        <h2 className='heading'>Carousel</h2>
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
    </div>
  );
}

export default App;
