import React, { useState, useEffect } from 'react';
import image1 from '../../img/banner.jpg';
import image2 from '../../img/banner3.jpg';
import image3 from '../../img/banner4.jpg';
import '../banner/style.css';
const Slide = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image1,
    image2,
    image3,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const imageStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'opacity 2s ease-in-out',
  };

  return (
    <div className='slideStyle'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{ ...imageStyle, opacity: currentImage === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

export default Slide;
