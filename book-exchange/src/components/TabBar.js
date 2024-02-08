import React from 'react';
import '../styles/BookDisplay.css';
import Tab from '../components/Tab';

const TabBar = (props) => {
	
	const { tabs, activeTab, onTabClick } = props;
	console.log(tabs[0]);
	return (
	<div>
		<div className="tab-bar">
			{tabs.map((tab) => (
				<Tab
					key={tab.id}
					label={tab.label}
					isActive={activeTab === tab.id}
					onClick={() => onTabClick(tab.id)}
				/>
			))}
		</div>
		<hr/>
	</div>
	);
}


export default TabBar;