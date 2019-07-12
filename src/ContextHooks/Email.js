import React from 'react';
import { fetchEmails } from '../api/'

const EmailContext = React.createContext(); 
const {Provider, Consumer} = EmailContext

const EmailProvider = (props) => {

	let [ emails, setEmails ] = React.useState([])
	let [currentEmail, setCurrentEmail ] = React.useState(null)
	let [ err, setErr ] = React.useState(null)
	let [ loading, setLoading ] = React.useState(false)

	Reaect.useEffect(() => {
		console.log('EmailProvider "CDM" mock, fetch emails here...');
		setLoading(true)


	}, [])

	return(<Provider>
		{props.children}
	</Provider>)
}

// export default Provider;
export {EmailProvider, Consumer as EmailConsumer, EmailContext}
//Contains Context.Consumer, Context.Provider