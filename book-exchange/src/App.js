/*import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'

function App() {
	return (
		<div>
			<Banner />
			<Cart />
			<ShoppingList />
		</div>
	)
}

export default App*/
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
function App() {
	console.log("app");
  return (
    <Router>
		<Routes>
		<Route path="/" element={<WelcomePage />} />
      {/* Ajoutez d'autres routes si nécessaire */}
		</Routes>
      
    </Router>
  );
}

export default App;
