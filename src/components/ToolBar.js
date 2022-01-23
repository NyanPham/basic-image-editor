import React from 'react';

const ToolBar = ({methods, onMethodClick, activeProperty}) => {
	return (
		<div className="tool-bar">
			{methods.map((method, index) => {
				return <button 
							className={method === activeProperty ? 'active method' : 'method'}
							key={index} 
							name={method} 
							onClick={onMethodClick}
						>{method}</button>
			})}
		</div>
		)
};

export default ToolBar;
