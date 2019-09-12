import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../Components/LoginPage/v2';
import MainPage from '../Components/MainPage/v2';
import '../main.css';
import { UserProvider, UserConsumer } from '../UserContext'
import { EmailProvider, EmailConsumer } from '../EmailContext'

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
    <UserProvider>
      <EmailProvider>
        <Root />
      </EmailProvider>
    </UserProvider> 
  )
}
ReactDOM.render(<ProvidedRoot />, document.getElementById('app'));