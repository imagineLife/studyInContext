import React from 'react';
import UserMenu from '../UserMenu/Hooks';

const Header = ({ currentUser, onLogout }) => (
  <header className="Header">
    <h2>MyMail</h2>
    <UserMenu onLogout={onLogout} />
  </header>
);

export default Header;