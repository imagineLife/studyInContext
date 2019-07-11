import React from 'react';
import Header from '../Header/Hooks';
import MessageList from '../MessageList/Hooks';

const MainPage = ({ currentUser }) => {
	return(
	  <main className="myMain">
	    <Header />
	    <MessageList currentUser={currentUser} />
	  </main>
	)
};

export default MainPage;