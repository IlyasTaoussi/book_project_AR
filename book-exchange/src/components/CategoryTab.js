import React, { useEffect, useState } from 'react'
import '../styles/BookDisplay.css'; 

import BookList from '../components/BookList';

const CategoryTab = (props) => {	

	const {category, books} = props;
	
	return (
		<div className='category-container'>
			<BookList books={books} />
		</div>
	)
};

export default CategoryTab; 