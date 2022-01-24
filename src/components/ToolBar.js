import React from 'react';
import ToolbarItem from './ToolbarItem';

const ToolBar = ({optionNames, activeIndex, onToolBarItemClick}) => {
	return (
		<div className="tool-bar">
			{optionNames.map((optionName, index) => {
				return (
					<ToolbarItem 
						optionName={optionName} 
						key={index} 
						index={index}
						isActive={activeIndex === index} 
						handleToolbarItemClick={() => onToolBarItemClick(index)}
					/>
				)
			})}
		</div>
		)
};

export default ToolBar;
