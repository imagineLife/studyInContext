import React from 'react'
import { UserConsumer } from '../ContextHooks/User'
import LoginPage from '../Components/LoginPage/Hooks';
import MainPage from '../Components/MainPage/Hooks';

const AppConsumer = () => (
	<UserConsumer>
	  { ( {currentUser} ) =>  
	   currentUser ? 
	   	 (<MainPage/>) 
	   : (<LoginPage />)
	  }
	</UserConsumer>
)

export default AppConsumer;