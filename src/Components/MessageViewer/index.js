import React from 'react'
import {EmailConsumer} from '../../EmailContext'

const MessageViewer = () => (
	<EmailConsumer>
		{({currentEmail}) => {
			console.log('currentEmail')
			console.log(currentEmail)
			
			return(
				<div className="messageViewer">
					<button onClick={() => onSelectEmail(null)}>
						Back
					</button>
					<h2>{currentEmail.subject}</h2>
					<div>{currentEmail.body}</div>
				</div>
			)}
		}
	</EmailConsumer>
)

export default MessageViewer