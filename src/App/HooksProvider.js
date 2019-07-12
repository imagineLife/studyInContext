import React from 'react';
import ReactDOM from 'react-dom';
import AppConsumer from './HooksConsumer'
import { UserProvider } from '../ContextHooks/User'
import { EmailProvider } from '../ContextHooks/Email'
import '../main.css';

export default function Root(){
  return(
    <UserProvider>
      <EmailProvider>
        <AppConsumer />
      </EmailProvider>
      </UserProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'));