import React from 'react';
import './index.css'
import {UserConsumer} from '../../UserContext'
import {EmailConsumer} from '../../EmailContext'
const MessageList = () => (
	<UserConsumer>
		{({currentUser}) => (
			
			<EmailConsumer>
				{({loading, emails, onSelectEmail}) => {					
					return (
					<div className="mssageList">

						{
							loading ? 
							<div className="no-messages">Loading...</div>
							:
						 	emails.length === 0 ?
							<div className="no-messages">
								Your mailbox is empty, {currentUser.firstName}!
							</div>
							:
							<ul>
								{emails.map(email => 
									<SingleEmail 
										key={email.id} 
										email={email} 
										onClick={() => onSelectEmail(email)} />
								)}
							</ul>
						}
				  </div>


				)
				}}
			</EmailConsumer>
		)}
	</UserConsumer>	
);

const SingleEmail = ({email, onClick}) => (
	<li onClick={onClick}>
		<div className="subject">{email.subject}</div>
		<div className="preview">{email.preview}</div>
	</li>
)
export default MessageList;