import React from 'react';
import { useSelector } from 'react-redux';

import MessagesList from '../../components/MessagesList/MessagesList';

function MessagesListContainer() {
  // on va chercher les messages dans le store, on selectionne uniquement les messages pour ne re-render
  // que si, et uniquement si les messages sont modifié
  const messages = useSelector((state) => state.chat.messages);
  const connectedPseudo = useSelector((state) => state.settings.connectedPseudo);

  return (
    <MessagesList
      messages={messages}
      connectedAuthor={connectedPseudo}
    />
  );
}
MessagesListContainer.propTypes = {};

MessagesListContainer.defaultProps = {};

export default React.memo(MessagesListContainer);
