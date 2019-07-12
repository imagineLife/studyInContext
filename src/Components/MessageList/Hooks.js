import React from 'react';
import {UserContext} from '../../ContextHooks/User'
import { EmailContext } from '../../ContextHooks/Email'
import Email from '../SingleEmail'

const MessageList = () => {
	
	const { currentUser : { firstName, lastName }} = React.useContext(UserContext)
	const { loading, emails, selectThisEmail } = React.useContext(EmailContext)
	
	return(
		<div className="MessageList">
			{/* If No Emails */}
			{!emails || (emails && emails.length === 0) && <div className="no-messages">
				Your mailbox is empty, {firstName} {lastName}! 🎉
			</div>}

			{/* If Loading*/}
			{loading && <div className="no-messages">Loading...</div>}

			{/* If emails */}
			<ul>
				{emails.map(msg => 
				<Email  
				  key={msg.id}
				  email={msg}
				  onClick={() => selectThisEmail(msg)}/>
				)}	
			</ul>
		</div>
	)
};

export default MessageList;