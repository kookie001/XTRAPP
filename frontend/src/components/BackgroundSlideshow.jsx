import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <img src={images[currentImage]} alt="Slideshow" className="w-full h-[90vh] object-cover mt-2" />
  );
};

export default BackgroundSlideshow;
