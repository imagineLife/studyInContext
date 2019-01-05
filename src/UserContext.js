import React from 'react'
import { FAKE_USER } from './api'

//contains UserContext.Consumer && UserContext.Provider
const { Provider, Consumer } = React.createContext()

class UserProvider extends React.Component{
	state = {
		currentUser: null
	};

	handleLogin = user => {
		this.setState({ currentUser: user });
	};

	handleLogout = () => {
		this.setState({ currentUser: null });
	};

	render(){
		return(
			<Provider
				value={{
		          user: this.state.currentUser,
		          onLogin: this.handleLogin,
		          onLogout: this.handleLogout
		        }}>
				{this.props.children}
			</Provider>

		)
	}
}

export {UserProvider, Consumer as UserConsumer};