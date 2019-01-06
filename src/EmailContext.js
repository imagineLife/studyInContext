import React from 'react';
import { fetchEmails } from './apiData';

const { Provider, Consumer }  = React.createContext();


//holds state, to be distributed with provider
class EmailProvider extends React.Component{

	//some Context State
	state = {
		emails: [],
		currentEmail: null,
		error: null,
		loading: false
	}

	//fetches emails from api when Context is run
	componentDidMount(){
		
		this.setState({
			loading: true,
			error: null
		})

		fetchEmails().then(res => {
			//put emails in state
			this.setState({
				loading: false,
				emails: res
			})
		}).catch(err => {
			this.setState({
				loading: false,
				error: err
			})
		})

	}

	handleEmailSelection = (selectedEmail) => {
		this.setState({currentEmail: selectedEmail})
	}

	render(){
		return(
			<EmailProvider value={
				...this.state,
				onSelectEmail: handleEmailSelection
			}>
				{this.props.children}
			</EmailProvider>
		)
	}
}