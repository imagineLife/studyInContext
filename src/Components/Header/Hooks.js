import React from 'react';
import UserMenu from '../UserMenu/Hooks';

const Header = () => {


	return(
	  <header className="Header">
	    <h2>MyMail</h2>
	    <UserMenu/>
	  </header>
	);
}

export default Header;