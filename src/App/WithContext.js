import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../Components/LoginPage';
import MainPage from '../Components/MainPage/v2';
import '../main.css';
import { UserContext } from '../UserContext'

export default class Root extends React.Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    console.log('WithContext App Render');
    
    //if logged-in, state knows about current user
    return this.state.currentUser ? (
      <UserContext.Provider value={this.state.currentUser}>
        <MainPage
          onLogout={this.handleLogout}
        />
      </UserContext.Provider>

      //if not logged-in
      ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));