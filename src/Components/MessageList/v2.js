import React from 'react';
import './index.css'
import {UserConsumer} from '../../UserContext'

const MessageList = () => (
	<UserConsumer>
		{({currentUser}) => (
			<div className="MmssageList">
		    <div className="no-messages">
		      Your mailbox is empty, {currentUser.firstName}! 🎉
		    </div>
		  </div>
		)}
	</UserConsumer>	
);

export default MessageList;