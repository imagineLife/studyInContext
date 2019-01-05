import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './ContextComponents/LoginPage';
import MainPage from './ContextComponents/MainPage';
import './main.css';
import {UserProvider, UserConsumer} from './UserContext'

export default function Root(){
  return (
    <UserProvider>
      <UserConsumer>
        {({user}) =>
        user ? (
          <MainPage />
        ) : (
          <LoginPage />
        )}
      </UserConsumer>
    </UserProvider>
  );
}


ReactDOM.render(<Root />, document.getElementById('app'));