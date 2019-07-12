import React from 'react';
import {UserContext} from '../../ContextHooks/User'
import { EmailContext } from '../../ContextHooks/Email'

const MessageList = () => {
	
	const { currentUser : { firstName, lastName }} = React.useContext(UserContext)
	const { loading, emails, selectThisEmail } = React.useContext(EmailContext)
	
	return(
		<div className="MessageList">
			<div className="no-messages">
				Your mailbox is empty, {firstName} {lastName}! 🎉
			</div>
		</div>
	)
};

export default MessageList;