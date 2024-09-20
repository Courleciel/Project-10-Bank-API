import React from 'react';
import './User.css';
const User = () => {
  return (
    <main className="main bg-dark">

      <section className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </section>

      <section className="accounts">
        <h2 className="sr-only">Accounts</h2>
        {['Checking (x8349)', 'Savings (x6712)', 'Credit Card (x8349)'].map((account, idx) => (
          <article className="account" key={idx}>
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank {account}</h3>
              <p className="account-amount">{idx === 2 ? '$184.30' : idx === 1 ? '$10,928.42' : '$2,082.79'}</p>
              <p className="account-amount-description">
                {idx === 2 ? 'Current Balance' : 'Available Balance'}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default User;
