import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import './main.css';

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
    
    //if logged-in, state knows about current user
    return this.state.currentUser ? (
      <MainPage
        currentUser={this.state.currentUser}
        onLogout={this.handleLogout}
      />

    //if not logged-in
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));