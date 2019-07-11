import React from 'react';
import ReactDOM from 'react-dom';
import AppConsumer from './AppConsumer'
import {UserContext, UserProvider, UserConsumer} from './UserContextHooks'
import './main.css';

export default function Root(){
  return(
    <UserProvider>
      <AppConsumer />
    </UserProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));