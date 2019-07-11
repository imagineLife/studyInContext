import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage/Hooks';
import MainPage from './Components/MainPage/Hooks';
import {UserContext, UserProvider, UserConsumer} from './UserContextHooks'
import './main.css';

export default function Root(){
  
    
  //if logged-in, app about current user
  return(
    <UserProvider>
      <UserConsumer>
        { ( {currentUser} ) =>  
           currentUser ? (<MainPage/>) : (<LoginPage />)
        }
      </UserConsumer>
    </UserProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));