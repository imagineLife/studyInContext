import React from 'react';
import { login } from '../../api/';
import './index.css';

function LoginPage(props){
  /*
    state = {
      error: null,
      loading: false,
      username: '',
      password: ''
    };
  */ 

  let [error, setError] = React.useState(null)
  let [loading, setLoading] = React.useState(false)
  let [username, setUsername] = React.useState('')
  let [password, setPassword] = React.useState('')

  const handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    login(this.state.username, this.state.password)
      .then(user => {
        setLoading(false)
        props.onLogin(user);
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