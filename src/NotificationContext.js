import React from 'react'
import './notification.css'

const {Provider, Consumer} = React.createContext()

class NotificationProvider extends React.Component{
	state = {
		messages: []
	}

	addMessage = text => {
		this.setState(prevState => ({
			messages: [
			  ...prevState.messages,
			  {
					id: Math.random(),
					text,
					addedAt: new Date().getTime()
			  }
			]
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
		 		{this.props.children}
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

function withNotifier(Component){
	return function Notified(props){
		return(
		  <Consumer>
		    {({ notify})  => (
		    	<Component {...props} notify={notify} />
		    )}
		  </Consumer>
		)
	}
}

export { NotificationProvider, Consumer as Notifier, withNotifier }