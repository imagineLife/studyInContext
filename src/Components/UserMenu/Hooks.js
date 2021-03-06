import React from 'react';

import { UserContext } from '../../ContextHooks/User'

function UserMenu(){

  const { currentUser: { avatar }, handleLogout } = React.useContext(UserContext);
  
  const [menuVisible, setMenuVisible] = React.useState(false)

  const avatarRef = React.createRef();


  const hideMenu = e => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (e.target !== avatarRef.current) {
      setMenuVisible(false)
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  };
  
  return (
    <div className="userMenu">
      <img
        className="user-avatar"
        alt="User avatar"
        src={avatar}
        onClick={() => toggleMenu()}
        ref={avatarRef}
      />
      {menuVisible && (
        <ul>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;