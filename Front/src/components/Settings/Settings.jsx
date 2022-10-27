import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './settingsStyles.scss';
import { Plus } from 'react-feather';

function Settings({
  onLogin,
}) {
  const [email, setEmail] = useState('bouclierman@herocorp.io');
  const [password, setPassword] = useState('jennifer');
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // on verifie que l'on a bien une valuer dans email et dans password
    if (!email.trim() || !password.trim()) {
      return;
    }

    // on envoie l'action setConnectEmail pour enregistrer l'email dans redux
    onLogin(email.trim(), password);

    // on ferme le formulaire
    setIsOpen(false);
  };

  return (
    <div className="settings">
      <button
        onClick={toggleOpen}
        type="button"
        className={classnames('settings-button', { 'settings-button__open': isOpen })}
        // className={`settings-button ${isOpen ? 'settings-button__open' : ''}`}
      >
        <Plus width="100%" height="60%" />
      </button>
      {isOpen && (
        <form className="settings-form" onSubmit={handleSubmit}>
          <input
            className="settings-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="settings-input"
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="settings-submit"
            type="submit"
            disabled={!email || !password} // mon bouton est disabled si email est vide ou password
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}
Settings.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

Settings.defaultProps = {};

export default React.memo(Settings);
