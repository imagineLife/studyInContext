import React from 'react';
import { UserConsumer } from '../../UserContext';
import { EmailConsumer } from '../../EmailContext';

const MessageList = () => (
	<UserConsumer> 
		{({user}) => (
			<EmailConsumer>
				{({emails}) => (
					<div className="MessageList">
					    {emails.length === 0 ?
					    	<div className="no-messages">
						      Your mailbox is empty, {user.firstName}! 🎉
						    </div>
						    : <ul>
						    	{emails.map(email => (
						    		<Email key={email.id} 
						    		onClick={() => onSelectEmail(email)}
						    		email={email} />
						    	))}
						    </ul>
					    }
					    
					</div>
				)}
			</EmailConsumer>
		)}  
	</UserConsumer>
);


const Email = ({email, onClick}) => (
	<li onClick={onClick}>
		<div className="emailSubject">{email.subject}</div>
		<div className="emailPreview">{email.preview}</div>
	</li>
)

export default MessageList;