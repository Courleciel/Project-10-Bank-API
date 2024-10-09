import React from 'react';
import Accounts from '../../components/Accounts';

const User = () => {
  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </section>

      <Accounts />
    </main>
  );
};

export default User;
