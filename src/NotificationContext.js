import React from 'react'

const {Provider, Consumer} = React.createContext()

class NotificationContext extends React.Component{
	state = {
		messages: []
	}

	render(){
		return(
		 <Provider>
		 	<div className='notification-wrapper'>
		 		
		 	</div>
		 </Provider>
		)
	}
}