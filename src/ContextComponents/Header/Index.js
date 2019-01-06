import React from 'react';
import UserMenu from '../UserMenu';
import './index.css'

const Header = () => (
  <header className="header">
    <h2>MyMail</h2>
    <UserMenu />
  </header>
);

export default Header;