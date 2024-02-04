import React from 'react';
import '../styles/WelcomePage.css'; 

import Footer from '../components/Footer';
import Header from '../components/Header';

import BookList from '../components/BookList';


const WelcomePage = (props) => {
	const { loggedIn, email } = props
  return (
	<div className="welcome-page">
		<Header email={email} loggedIn={loggedIn}/>
		<div className="header-content">
			<h1>BookBuddy</h1>
			<div className="menu-section">
				<nav>
					<ul>
						<li>BOOKS</li>
						<li>TEXTBOOKS</li>
						<li>NOOK BOOKS</li>
						<li>AUDIOBOOKS</li>
						<li>MAGAZINES</li>
					</ul>
				</nav>
			</div>
		</div>
      
      <main>
        <div className="description">
          <p>Welcome to BookBuddy, your dynamic book-sharing platform! Join us to upload, exchange, and discuss your favorite books.</p>
        </div>
        <div className="team-presentation">
          <p>We are Aya, Maha, and Faustine, students from Polytech, working together to create this full-stack project.</p>
        </div>
		<BookList />
      </main>
	  
	  <Footer />
    </div>
  );
};

export default WelcomePage;
