import React from 'react';
import UserMenu from '../UserMenu/v2.js';

const Header = ({ onLogout }) => (
  <header className="header">
    <h2>MyMail</h2>
    <UserMenu onLogout={onLogout} />
  </header>
);

export default Header;