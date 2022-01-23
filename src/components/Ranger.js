import React from 'react';

const Ranger = ({value, onRangerChange}) => {
	return (
		<div className="ranger">
			<input type="range" min="0" max="100" value={value} onChange={onRangerChange}/>
		</div>
	)
};

export default Ranger;
