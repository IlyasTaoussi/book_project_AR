import React, { useEffect, useState } from 'react'
import '../styles/BookDisplay.css';

const Tab = (props) => {	

	const {label, isActive, onClick} = props;	
	const handleClick = () => {
		onClick();
	};
	
	return (
		<div className='category-container'>
			<button	className={`tab-link ${isActive ? 'active' : ''}`} onClick={handleClick}>
				{label}
			</button>
		</div>
	)
};

export default Tab; 