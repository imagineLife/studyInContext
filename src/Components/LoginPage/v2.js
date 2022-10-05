import React from 'react';
import { login } from '../../api/';
import './index.css';

import { UserContext } from '../../UserContext'

class LoginPage extends React.Component {
  state = {
    error: null,
    loading: false,
    username: '',
    password: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, handleLogin) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    login(this.state.username, this.state.password)
      .then(user => {
        this.setState({ loading: false });
        handleLogin(user);
      })
      .catch(error => this.setState({ error, loading: false }));
  };

  render() {
    const { username, password, error, loading } = this.state;

    return (
      <UserContext.Consumer>
      {({handleLogin}) => (
        <div className="LoginPage">
          <form onSubmit={e => this.handleSubmit(e, handleLogin)}>
            <label>
              Username
              <input
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </label>
            {error && <div className="error">{error.message}</div>}
            <button type="submit" disabled={loading}>
              Sign In
            </button>
          </form>
        </div>
      )}
      </UserContext.Consumer>
    );
  }
}

export default LoginPage;