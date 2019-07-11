import React from 'react';

const UserContext = React.createContext(); 
const {Provider, Consumer} = UserContext

const UserProvider = (props) => {
	return(<Provider>
		{props.children}
	</Provider>)
}

// export default Provider;
export {Provider as UserProvider, Consumer as UserConsumer, UserContext}
//Contains Context.Consumer, Context.Provider