import React from 'react';
import { login } from '../../api/';
import './index.css';
import { UserContext } from '../../UserContextHooks'

function LoginPage(){

  let handleLogin = React.useContext(UserContext)
  let [error, setError] = React.useState(null)
  let [loading, setLoading] = React.useState(false)
  let [username, setUsername] = React.useState('')
  let [password, setPassword] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    login(username, password)
      .then(user => {

        console.log('user HERE')
        console.log(user)
        
        setLoading(false)
        handleLogin(user);
      })
      .catch(error => {
        setLoading(false)
        setError(error)
      });
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <div className="error">{error.message}</div>}
        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;