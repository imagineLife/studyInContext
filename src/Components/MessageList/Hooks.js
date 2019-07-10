import React from 'react';
import {UserContext} from '../../UserContextHooks'
import { EmailConsumer } from '../../EmailContext'

const MessageList = () => {
	
	const UserData = React.useContext(UserContext)

	return(
		<div className="MessageList">
			<div className="no-messages">
				Your mailbox is empty, {UserData.firstName}! 🎉
			</div>
		</div>
	)
};

export default MessageList;