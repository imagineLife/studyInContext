import React from 'react';
import UserContext from '../../UserContext';

const MessageList = ({ currentUser }) => (
  <div className="MessageList">
    <div className="no-messages">
      Your mailbox is empty, {currentUser.firstName}! 🎉
    </div>
  </div>
);

export default MessageList;