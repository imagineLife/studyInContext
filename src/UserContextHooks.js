import React from 'react';

const UserContext = React.createContext(); 
const {Provider, Consumer} = UserContext

const UserProvider = (props) => {

	let [currentUser, setCurrentUser] = React.useState(null)
	  
	const handleLogin = user => {
	    setCurrentUser(user);
	};

	const handleLogout = () => {
	    setCurrentUser(null);
	};

	return(<Provider value={{
	  currentUser,
      handleLogout,
      handleLogin
    }}>
		{props.children}
	</Provider>)
}

// export default Provider;
export {UserProvider, Consumer as UserConsumer, UserContext}
//Contains Context.Consumer, Context.Provider