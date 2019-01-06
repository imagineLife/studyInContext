import React from 'react';
import { UserConsumer } from '../../UserContext'
import { EmailConsumer } from '../../EmailContext'


const MessageList = () => (
  <UserContext>
  	{ ({user}) => (
  		<EmailConsumer>
			<div className="MessageList">
				<div className="no-messages">
					Your mailbox is empty, {user.firstName}! 🎉
				</div>
			</div>
		</EmailConsumer>
  	)}
  </UserContext>
);

export default MessageList;