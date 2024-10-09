import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Accounts from '../../components/Accounts';
import { fetchUserProfile } from '../../service/serviceApi';

const User = () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token]);

  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>Welcome back<br />{firstName} {lastName}</h1>
        <button className="edit-button">Edit Name</button>
      </section>

      <Accounts />
    </main>
  );
};

export default User;
