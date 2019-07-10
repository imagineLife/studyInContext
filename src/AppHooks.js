import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage/Hooks';
import MainPage from './Components/MainPage/Hooks';
import UserContext from './UserContextHooks'
import './main.css';

export default function Root(){
  let [currentUser, setCurrentUser] = React.useState(null)
  
  const handleLogin = user => {
    console.log('handleLogin USER => ')
    console.log(user)
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  console.log('currentUser')
  console.log(currentUser)
  
    
  //if logged-in, app about current user
  return currentUser ? (
    <UserContext.Provider value={currentUser}>
      <MainPage
        currentUser={currentUser}
        onLogout={handleLogout}
      />
    </UserContext.Provider>

  //if not logged-in
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

ReactDOM.render(<Root />, document.getElementById('app'));