import React, { useEffect, useState } from 'react'
import '../styles/WelcomePage.css'; 
import '../styles/BookDisplay.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import BookList from '../components/BookList';
import GenreTab from '../components/GenreTab';

const WelcomePage = (props) => {
	
	const { loggedIn, email } = props
	const [genres, setGenres] = useState([
		{genre:'Action', categories: ['Crime','Drama']},
		{genre:'Comedy', categories: ['Romance','Slice of Life', "Tragedy"]},
		]);
	const tabs = genres.map((genre, index) => {return {id: (index+1), label: genre.genre}});
	
	const [activeTab, setActiveTab] = useState(tabs[0].id);
	useEffect(() => { setActiveTab(activeTab)}, [activeTab]);
	
	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};
	
	const [books, setBooks] = useState([
		{title: "Book Title 1", image: "https://fastly.picsum.photos/id/757/200/300.jpg?hmac=su32mJgKVc94YgSiaPE3SzaIM11AtqJgoGffpSTQUOE"},
		{title: "Book Title 2", image: "https://fastly.picsum.photos/id/757/200/300.jpg?hmac=su32mJgKVc94YgSiaPE3SzaIM11AtqJgoGffpSTQUOE"},
	]);
	
	return (
	<div className="welcome-page">
		<Header email={email} loggedIn={loggedIn}/>
		
		<div className="header-content">
			<h1>BookBuddy</h1>
			<div className="menu-section">
				<TabBar tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
				{genres.map((genre, index) => {
					if (activeTab === index + 1) {
						return <GenreTab key={index} genre={genre} books={books} />;
					}
					return null;
				})}
			</div>
		</div>

		
		
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
