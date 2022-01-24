import React from 'react';

const ImageView = ({imageURL, styles}) => {
  return (
      <div className='image-view'>
          <img className='added-image' src={imageURL} alt="image" style={styles}/>
      </div>
  )
};

export default ImageView;
