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

import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';

function App() {
	
	const [loggedIn, setLoggedIn] = useState(false);
	const [email, setEmail] = useState("");
	
	return (
	<Router>
		<Routes>
		<Route path="/" element={<WelcomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
		<Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
	  {/* Ajoutez d'autres routes si nécessaire */}
		</Routes>
	  
	</Router>
  );
}

export default App;
