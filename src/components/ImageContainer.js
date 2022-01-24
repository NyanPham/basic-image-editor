import React, { useState } from 'react';
import ImageInput from './ImageInput'
import ImageView from './ImageView'

const ImageContainer = ({properties}) => {
 	const [image, setImage] = useState('')


	const handleImageAdded = file => {
		const fileReader = new FileReader()
		fileReader.onload = () => {
			const url = fileReader.result
			setImage(url)
		}
		fileReader.readAsDataURL(file)
	}

	const filters = properties.map(property => {
		return `${property.property}(${property.value}${property.unit})`
	})

	const styles = {filter: filters.join(' ')}

  	return (
		  <div className="image-container">
			{ image ? (<ImageView imageURL={image} styles={styles}/>) : (<ImageInput onImageAdded={handleImageAdded}/>)}  
		  </div>
	  )	
};

export default ImageContainer;
