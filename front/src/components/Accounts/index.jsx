import React from 'react';
import './Accounts.css';

const Accounts = () => {
  const accountsData = [
    { title: 'Checking (x8349)', amount: '$2,082.79', description: 'Available Balance' },
    { title: 'Savings (x6712)', amount: '$10,928.42', description: 'Available Balance' },
    { title: 'Credit Card (x8349)', amount: '$184.30', description: 'Current Balance' },
  ];

  return (
    <section className="accounts">
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account, idx) => (
        <article className="account" key={idx}>
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank {account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Accounts;
