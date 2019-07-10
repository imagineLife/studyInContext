import React from 'react';
import Header from '../Header';
import MessageList from '../MessageList';

const MainPage = ({ currentUser, onLogout }) => {
	console.log('currentUser')
	console.log(currentUser)
	console.log('onLogout')
	console.log(onLogout)
	
	return(
	  <main className="myMain">
	    <Header currentUser={currentUser} onLogout={onLogout} />
	    <MessageList currentUser={currentUser} />
	  </main>
	)
};

export default MainPage;