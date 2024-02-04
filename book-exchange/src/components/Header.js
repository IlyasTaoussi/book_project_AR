// Footer.js
import React from 'react';
import '../styles/Header.css'
import NavBar from '../components/NavBar';

const Header = (props) => {
	const { loggedIn, email } = props
	return (
		<div className="title">
			<h1>Poly' Book Exchange</h1>
			<NavBar email={email} loggedIn={loggedIn} />
		</div>
	);
}


export default Header;