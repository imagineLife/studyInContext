import React from 'react';
import {UserContext} from '../../UserContextHooks'
import { EmailConsumer } from '../../EmailContext'

const MessageList = () => {
	
	const { currentUser : { firstName, lastName }} = React.useContext(UserContext)

	return(
		<div className="MessageList">
			<div className="no-messages">
				Your mailbox is empty, {firstName} {lastName}! 🎉
			</div>
		</div>
	)
};

export default MessageList;