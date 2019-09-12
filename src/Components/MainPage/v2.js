import React from 'react';
import Header from '../Header/v2';
import MessageList from '../MessageList/v2';

const MainPage = ({ onLogout }) => (
  <main className="myMain">
    <Header onLogout={onLogout} />
    <MessageList />
  </main>
);

export default MainPage;