import React from 'react';
import ReactDOM from 'react-dom';
import AppConsumer from './HooksConsumer'
import {UserContext, UserProvider, UserConsumer} from '../ContextHooks/User'
import '../main.css';

export default function Root(){
  return(
    <UserProvider>
      <AppConsumer />
    </UserProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));