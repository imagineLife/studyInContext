import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../Components/LoginPage/v2';
import MainPage from '../Components/MainPage/v2';
import '../main.css';
import { UserProvider, UserConsumer } from '../UserContext'
import { EmailProvider, EmailConsumer } from '../EmailContext'
import { NotificationProvider } from '../NotificationContext'

function Root(){
  console.log('WithContext App Render');
    
    return (
        <UserConsumer>
        {({currentUser}) => (
          currentUser ? (   
            <MainPage />
            ) : (
            <LoginPage />
          )
        )}
        </UserConsumer>
    );
}

const ProvidedRoot = () => {
  return(
    <NotificationProvider>
      <UserProvider>
        <EmailProvider>
          <Root />
        </EmailProvider>
      </UserProvider> 
    </NotificationProvider>
  )
}
ReactDOM.render(<ProvidedRoot />, document.getElementById('app'));