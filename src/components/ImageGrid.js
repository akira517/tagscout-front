import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  // サンプルの画像データ
  const images = [
    {
      id: 1,
      url: 'https://picsum.photos/300/300?random=1',
    },
    {
      id: 2,
      url: 'https://picsum.photos/300/300?random=2',
    },
    {
      id: 3,
      url: 'https://picsum.photos/300/300?random=3',
    },
    {
      id: 4,
      url: 'https://picsum.photos/300/300?random=4',
    },
    {
      id: 5,
      url: 'https://picsum.photos/300/300?random=5',
    },
    {
      id: 6,
      url: 'https://picsum.photos/300/300?random=6',
    }
  ];

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid; 