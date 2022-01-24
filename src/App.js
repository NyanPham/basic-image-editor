import React, { useState, useEffect } from 'react'

import './App.css';
import ImageContainer from './components/ImageContainer';
import Ranger from './components/Ranger';
import ToolBar from './components/ToolBar';

const DEFAULT_OPTIONS = [
	{
		name: 'Brightness',
		property: 'brightness',
		value: 100,
		range: {
			min: 0,
			max: 200
		},
		unit: '%'
	},
	{
		name: 'Contrast',
		property: 'contrast',
		value: 100,
		range: {
			min: 0,
			max: 200
		},
		unit: '%'
	},
	{
		name: 'Saturation',
		property: 'saturate',
		value: 100,
		range: {
			min: 0,
			max: 200
		},
		unit: '%'
	},
	{
		name: 'Grayscale',
		property: 'grayscale',
		value: 0,
		range: {
			min: 0,
			max: 100
		},
		unit: '%'
	},
	{
		name: 'Hue Rotate',
		property: 'hue-rotate',
		value: 0,
		range: {
			min: 0,
			max: 360
		},
		unit: 'deg'
	},
	{
		name: 'Sepia',
		property: 'sepia',
		value: 0,
		range: {
			min: 0,
			max: 100
		},
		unit: '%'
	},
	{
		name: 'Opacity',
		property: 'opacity',
		value: 100,
		range: {
			min: 0,
			max: 100
		},
		unit: '%'
	},
	{
		name: 'Blur',
		property: 'blur',
		value: 0,
		range: {
			min: 0,
			max: 20
		},
		unit: 'px'
	},
]


function App() {
	const [options, setOptions] = useState(DEFAULT_OPTIONS)
	const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
	const selectedOption = options[selectedOptionIndex]

	const optionNames = options.map(option => (option.name))

	const handleChangeOption = (index) => {
		setSelectedOptionIndex(index)
	}
	
	const handleRangerChange = e => {
		setOptions(prevOptions => prevOptions.map((option, index) => {
			if (index !== selectedOptionIndex) return option
			return {...option, value: e.target.value}
		}))
	}

	return (
		<div className="App">
			<ImageContainer properties={options}/>
			<ToolBar optionNames={optionNames} activeIndex={selectedOptionIndex} onToolBarItemClick={handleChangeOption}/>
			<Ranger 
				min={selectedOption.range.min}
				max={selectedOption.range.max}
				value={selectedOption.value}
				onChange={handleRangerChange}
			/>
		</div>
	);
}
export default App;
