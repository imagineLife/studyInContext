import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import './main.css';

export default function Root(){
  let [currentUser, setCurrentUser] = React.useState(null)

  const handleLogin = user => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  console.log('app hooks')
    
  //if logged-in, app about current user
  return currentUser ? (
    <MainPage
      currentUser={currentUser}
      onLogout={handleLogout}
    />

  //if not logged-in
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

ReactDOM.render(<Root />, document.getElementById('app'));