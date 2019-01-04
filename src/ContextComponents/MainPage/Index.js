import React from 'react';
import Header from '../Header';
import MessageList from '../MessageList';

const MainPage = ({ currentUser, onLogout }) => (
  <main>
    <Header onLogout={onLogout} />
    <MessageList />
  </main>
);

export default MainPage;