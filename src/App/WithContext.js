import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../Components/LoginPage/v2';
import MainPage from '../Components/MainPage/v2';
import '../main.css';
import { UserProvider, UserConsumer } from '../UserContext'

export default class Root extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    console.log('HERE!!');
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    console.log('WithContext App Render');
    
    //if logged-in, state knows about current user
    return (
      <UserProvider>
        <UserConsumer>
        {({currentUser}) => (
          currentUser ? (   
            <MainPage />
            ) : (
            <LoginPage />
          )
        )}
        </UserConsumer>
      </UserProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));