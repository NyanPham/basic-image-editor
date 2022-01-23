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

	const methods = Object.keys(properties)
	methods.forEach(method => {
		document.getElementById('root').style.setProperty(`--${method}`, properties[method])
	})



  	return (
		  <div className="image-container">
			{ image ? (<ImageView imageURL={image}/>) : (<ImageInput onImageAdded={handleImageAdded}/>)}  
		  </div>
	  )	
};

export default ImageContainer;
