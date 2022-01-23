import React from 'react';

const ImageView = ({imageURL}) => {
  return (
      <div className='image-view'>
          <img className='added-image' src={imageURL} alt="image" />
      </div>
  )
};

export default ImageView;
