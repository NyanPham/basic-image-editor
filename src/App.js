import React, { useState, useEffect } from 'react'

import './App.css';
import ImageContainer from './components/ImageContainer';
import Ranger from './components/Ranger';
import ToolBar from './components/ToolBar';

function App() {
	const [properties, setProperties] = useState({
		blur: 0,
		brightness: 100,
		contrast: 100,
		grayscale: 0,
		hueRotate: 0,
		saturate: 100,
		sepia: 0,
		opacity: 100
	})

	const [currentProperty, setCurrentProperty] = useState('blur')
	const [currentValue, setCurrentValue] = useState(0)

	useEffect(() => {
		const newValue = properties[currentProperty]
		setCurrentValue(newValue)
	}, [currentProperty])

	useEffect(() => {
		const newProperties = {...properties}
		newProperties[currentProperty] = currentValue
		setProperties(newProperties)
	}, [currentValue])

	const methods = Object.keys(properties)

	const handleMethodClick = e => {
		const newProperty = e.target.name
		setCurrentProperty(newProperty)
	}

	const handleRangerChange = e => {
		setCurrentValue(e.target.value)
	}

	return (
		<div className="App">
			<ImageContainer properties={properties}/>
			<ToolBar methods={methods} onMethodClick={handleMethodClick} activeProperty={currentProperty}/>
			<Ranger value={currentValue} onRangerChange={handleRangerChange}/>
		</div>
	);
}
export default App;
