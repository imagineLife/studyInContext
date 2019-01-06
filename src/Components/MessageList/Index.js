import React from 'react';
import { UserConsumer } from '../../UserContext'

const MessageList = () => (
  <UserContext>
  	{ ({user}) => (
		<div className="MessageList">
			<div className="no-messages">
				Your mailbox is empty, {user.firstName}! 🎉
			</div>
		</div>
  	)}
  </UserContext>
);

export default MessageList;