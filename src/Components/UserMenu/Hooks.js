import React from 'react';

function UserMenu(props){
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
        className="userAvatar"
        alt="User avatar"
        src={props.currentUser.avatar}
        onClick={() => toggleMenu()}
        ref={avatarRef}
      />
      {menuVisible && (
        <ul>
          <li onClick={props.onLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;