import React from 'react';

const EmailContext = React.createContext(); 
const {Provider, Consumer} = EmailContext

const EmailProvider = (props) => {

	return(<Provider>
		{props.children}
	</Provider>)
}

// export default Provider;
export {EmailProvider, Consumer as EmailConsumer, EmailContext}
//Contains Context.Consumer, Context.Provider