import React, { useEffect, useState } from 'react'
import '../styles/BookDisplay.css'; 

import CategoryTab from '../components/CategoryTab';
import TabBar from '../components/TabBar';

const GenreTab = (props) => {	

	const {genre, books} = props;
	const categories = genre["categories"];
	const [tabs, setTabs] = useState(categories.map((category, index) => {return {id: index+11, label: category}}));
	const [activeTab, setActiveTab] = useState(tabs[0].id);
	
	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
	};
	
	return (
		<div className='genre-container'>
			<TabBar tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
			{categories.map((category, index) => {return (activeTab === index+11 && <CategoryTab category={category} books={books} />)})}
		</div>
	)
};

export default GenreTab; 