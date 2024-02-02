import React from 'react';
import '../styles/WelcomePage.css'; // Make sure to create this CSS file and import it
import Footer from '../components/Footer';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <header>
        <div className="header-content">
          <h1>BookBuddy</h1>
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
      </header>
      
      <main>
        <div className="description">
          <p>Welcome to BookBuddy, your dynamic book-sharing platform! Join us to upload, exchange, and discuss your favorite books.</p>
        </div>
        <div className="team-presentation">
          <p>We are Aya, Maha, and Faustine, students from Polytech, working together to create this full-stack project.</p>
        </div>
      </main>
      
       <Footer />
    </div>
  );
};

export default WelcomePage;
