import React from 'react';
import Header from '../Header/Hooks';
import MessageList from '../MessageList/Hooks';

const MainPage = ({ currentUser, onLogout }) => {
	return(
	  <main className="myMain">
	    <Header currentUser={currentUser} onLogout={onLogout} />
	    <MessageList currentUser={currentUser} />
	  </main>
	)
};

export default MainPage;