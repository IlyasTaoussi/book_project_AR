import React from 'react'
import '../styles/BookDisplay.css'; 

import BookDisplay from '../components/BookDisplay';

const BookList = (props) => {	
	
	// Book Example for display, more fields needed
	/*
	*	TODO: get props from Library page/Genre component, or User profile page  
	*		  fetch books from API with either Genre(Library page) or User (Profile page) search,
	*/
	const {books} = props;
	if(books != undefined){
		return (
		<div className='book-container'>
			{books.map((book) => <BookDisplay key={book.title} {...book} />)}
		</div>)
	}
	return
};

export default BookList; 