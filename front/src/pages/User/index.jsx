import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Accounts from '../../components/Accounts';
import { fetchUserProfile, modifyUserProfile } from '../../service/serviceApi'; // Import de modifyUserProfile
import './user.css'

const User = () => {
  const dispatch = useDispatch();

  // Récupération des informations du store Redux
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const token = useSelector((state) => state.auth.token);

  const [isEditing, setIsEditing] = useState(false); // État pour savoir si on est en mode édition
  const [newFirstName, setNewFirstName] = useState(firstName); // Stockage du nouveau prénom
  const [newLastName, setNewLastName] = useState(lastName); // Stockage du nouveau nom

  // Récupérer le profil de l'utilisateur dès que le token est disponible
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token)); // Fetch des informations utilisateur
    }
  }, [dispatch, token]);

  // Initialiser les champs du formulaire avec les valeurs actuelles
  const handleEditClick = () => {
    setNewFirstName(firstName); // Pré-remplir avec le prénom actuel
    setNewLastName(lastName);   // Pré-remplir avec le nom actuel
    setIsEditing(true);         // Activer le mode édition
  };

  // Fonction de soumission du formulaire de modification
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    dispatch(modifyUserProfile({ token, firstName: newFirstName, lastName: newLastName }))
      .unwrap() // Unwrap pour gérer les erreurs éventuelles
      .then(() => {
        // Après la mise à jour réussie, on désactive le mode édition
        setIsEditing(false);
        // On recharge les informations de profil mises à jour
        dispatch(fetchUserProfile(token));
      })
      .catch((error) => {
        console.error('Error updating user profile:', error); // Gérer les erreurs si la mise à jour échoue
      });
  };

  return (
    <main className="main bg-dark">
      <section className="header">
        <h1>
          Welcome back<br />
          {isEditing ? (
            <form onSubmit={handleSubmit} className="edit-name-form">
              <div className="name-fields">
                <input
                  type="text"
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                  placeholder="First Name"
                  className="edit-input"
                />
                <input
                  type="text"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder="Last Name"
                  className="edit-input"
                />
              </div>
              <div className="button-group">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              {firstName} {lastName}
            </>
          )}
        </h1>

        {!isEditing && (
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        )}
      </section>

      <Accounts />
    </main>
  );
};

export default User;
