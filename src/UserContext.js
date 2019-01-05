import React from 'react'

//contains UserContext.Consumer && UserContext.Provider
const UserContext = React.createContext()

class UserProvider extends React.Component{
	render(){
		return(
			<Provider>
				{this.props.children}
			</Provider>

		)
	}
}

export default UserContext;