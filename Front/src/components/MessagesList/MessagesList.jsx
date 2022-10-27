import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './messagesListStyles.scss';
import Message from '../Message/Message';

function MessagesList({
  messages, connectedAuthor,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // des que la liste des messages changent on va modifier le scroll de notre liste
    containerRef.current?.scrollTo(0, containerRef.current?.scrollHeight);
    // on lui demande de scroll de 0 en X, et de sa hauteur en Y
  }, [messages]);

  return (
    <div className="messages" ref={containerRef}>
      {messages.map(({ author, text, id }) => (
        <Message
          key={id}
          author={author}
          text={text}
          isMine={author === connectedAuthor}
        />
      ))}
    </div>
  );
}
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  connectedAuthor: PropTypes.string,
};

MessagesList.defaultProps = {
  connectedAuthor: undefined,
};

export default React.memo(MessagesList);
