// Footer.js
import React from 'react';
import '../styles/Header.css'
import NavBar from '../components/NavBar';

function Header() {
  return (
	<div className="title">
		<h1>Poly' Book Exchange</h1>
		<NavBar />
	</div>
  );
}


export default Header;