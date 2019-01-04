import React from 'react';
import UserContext from '../../UserContext';

const MessageList = () => (
	<UserContext.Consumer> 
		{contextValue => (
			<div className="MessageList">
			    <div className="no-messages">
			      Your mailbox is empty, {contextValue.firstName}! 🎉
			    </div>
			</div>
		)}  
	</UserContext.Consumer>
);

export default MessageList;