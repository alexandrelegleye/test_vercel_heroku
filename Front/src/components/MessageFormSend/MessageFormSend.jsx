import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Loader, Send } from 'react-feather';

import './messageFormSendStyles.scss';

function MessageFormSend({
  disabled,
  onSendMessage,
  isLoading,
}) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // quand isConnected change on met le focus sur l'input, si on est connecté
    if (disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!disabled || !value.trim()) {
      // si je ne suis pas connecté OU
      // si je n'ai aucun texte de noté je ne fait rien
      return;
    }

    // on envoie l'auteur et le text au chatReducer
    onSendMessage(value.trim());

    // je reset l'input
    setValue('');
  };

  return (
    <form className="sendMessage" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        placeholder="Saisissez votre message..."
        className="sendMessage-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!disabled}
      />
      <button
        type="submit"
        className={classNames('sendMessage-submit', { 'is-loading': isLoading })}
        disabled={!disabled}
      >
        {!isLoading && (
          <Send />
        )}
        {isLoading && (
          <Loader />
        )}
      </button>
    </form>
  );
}
MessageFormSend.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

MessageFormSend.defaultProps = {};

export default React.memo(MessageFormSend);
