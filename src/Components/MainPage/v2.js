import React from 'react';
import Header from '../Header/v2';
import MessageList from '../MessageList/v2';
import MessageViewer from '../MessageViewer/';
import { EmailConsumer } from '../../EmailContext'

const MainPage = () => (
	<EmailConsumer>
	  {({currentEmail}) => (
	  	<main className="myMain">
		    <Header />
		    {
		    	currentEmail ? <MessageViewer /> : <MessageList />
		    }
		  </main>
	  )}
	</EmailConsumer>
);

export default MainPage;