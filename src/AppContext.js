import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './ContextComponents/LoginPage';
import MainPage from './ContextComponents/MainPage';
import './main.css';
import {UserProvider, UserConsumer} from './UserContext'
import { EmailProvider } from './EmailContext'

export default function Root(){
  return (
    
        <UserConsumer>
          {({user}) =>
          user ? (
            <MainPage />
          ) : (
            <LoginPage />
          )}
        </UserConsumer>
  );
}


ReactDOM.render(
  <UserProvider>
    <Root />
  </UserProvider>, 
  document.getElementById('app'));