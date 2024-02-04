import React, { useEffect, useState } from 'react'
import '../styles/BookDisplay.css'; 

import BookDisplay from '../components/BookDisplay';

const BookList = () => {	
	
	const [book, setBook] = useState({title: "Book Title", image: "https://fastly.picsum.photos/id/757/200/300.jpg?hmac=su32mJgKVc94YgSiaPE3SzaIM11AtqJgoGffpSTQUOE"});
	
	return (
		<div className='book-container'>
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
		</div>)
};

export default BookList; 