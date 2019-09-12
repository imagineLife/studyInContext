import React from 'react';
import './index.css'

const MessageList = ({ currentUser }) => (
  <div className="MmssageList">
    <div className="no-messages">
      Your mailbox is empty, {currentUser.firstName}! 🎉
    </div>
  </div>
);

export default MessageList;