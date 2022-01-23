import React, { useState } from 'react';

const IMAGE_EXTENTIONS = ['image/png', 'image/jpg', 'image/jpeg']

const ImageInput = (props) => {
  const [title, setTitle] = useState('Drag and Drop your Image')

  const imageInputElementRef = React.createRef()
  const handleAddImageClick = e => {
    imageInputElementRef.current.click()
  }
  
  const onImageAdded = e => {
    const file = e.target.files[0]
    if (!IMAGE_EXTENTIONS.includes(file.type)) return alert('Uploaded file is not an image!')
    props.onImageAdded(file)
  }
  
  const handleDragOver = e => {
    e.preventDefault()
    setTitle('Drop to upload the file')
  }

  const handleDragLeave = e => {
    setTitle('Drag and Drop your Image')
  }

  const handleDrop = e => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (!IMAGE_EXTENTIONS.includes(file.type)) return alert('Uploaded file is not an image!')
    props.onImageAdded(file)
  }

  return (
      <div className='image-input' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
          <h2>{title}</h2>
          <button className="add-image-btn" onClick={handleAddImageClick}>+</button>
          <input ref={imageInputElementRef} type='file' hidden={true} onChange={onImageAdded}/>
      </div>
  )
};

export default ImageInput;
