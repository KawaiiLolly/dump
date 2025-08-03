import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { photoData } from '../assets/assets.js';
import '../App.css';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(photoData);
    setImages(shuffled);
  }, []);

  const breakpointColumnsObj = {
    default: 5,
    1200: 4,
    900: 3,
    600: 2,
    400: 1,
  };

  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.img}
              alt={`Gallery ${index}`}
              className="gallery-img"
            />
          </a>
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGallery;
