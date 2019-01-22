import React from 'react'

const {Provider, Consumer} = React.createContext()

class NotificationContext extends React.Component{
	state = {
		messages: []
	}

	addMessage = text => {
		this.setState(prevState => ({
			...prevState.messages,
			{
				id: Math.random(),
				text,
				addedAt: new Date().getTime()
			}
		}))
	}

	removeMessage = msg => {
		this.setState(prevState => ({
			messages: prevState.messages.filter(m => m.id !== msg.id)
		}))
	}

	render(){
		return(
		 <Provider value={{
		 	...this.state,
		 	notify: this.addMessage
		 }}>
		 	<div className='notification-wrapper'>
		 		<ul>
		 			{this.state.messages.map(m => (
		 				<Notification
		 				  key={m.id}
		 				  message={m}
		 				  onClose={() => this.removeMessage(m)} />
		 			))}
		 		</ul>
		 	</div>
		 </Provider>
		)
	}
}

const Notification = ({message, onClose}) => (
	<li>
		{message.text}
		<button className='close closeButton' onClick={onClose}>&times;</button>
	</li>
)

export { Provider, Consumer as Notifier }