import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './ContextComponents/LoginPage';
import MainPage from './ContextComponents/MainPage';
import './main.css';
import UserContext from './UserContext'

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
    console.log('made it here :) ')

    let contextObj = {
      user: this.state.currentUser,
      // onLogin: this.handleLogin,
      onLogout: this.handleLogout
    }
    
    return this.state.currentUser ? (
      <UserContext.Provider value={contextObj}>
        <MainPage />
      </UserContext.Provider>
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));