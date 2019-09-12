import React from 'react'
import { FAKE_USER } from './api'

//contains UserContext.Consumer && UserContext.Provider
const UserContext = React.createContext()
const { Provider, Consumer } = UserContext;

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
		          currentUser: this.state.currentUser,
		          handleLogin: this.handleLogin,
		          handleLogout: this.handleLogout
		        }}>
				{this.props.children}
			</Provider>

		)
	}
}

export {UserProvider, Consumer as UserConsumer, UserContext};