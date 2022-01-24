import React from 'react';

const Ranger = ({min, max, value, onChange}) => {
	return (
		<div className="ranger">
			<input type="range" min={min} max={max} value={value} onChange={onChange}/>
		</div>
	)
};

export default Ranger;
