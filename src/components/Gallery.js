import React from 'react';
import Sidebar from './Sidebar';
import ImageGrid from './ImageGrid';

const Gallery = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <ImageGrid />
      </div>
    </div>
  );
};

export default Gallery; 