import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getActionSendMessage } from '../../actions/chatActions';
import MessageFormSend from '../../components/MessageFormSend/MessageFormSend';

function ContainerFormSend() {
  const dispatch = useDispatch(); // permet juste de recuperer store.dispatch
  const isConnected = useSelector((state) => state.settings.isConnected);
  const connectedPseudo = useSelector((state) => state.settings.connectedPseudo);
  const isLoading = useSelector((state) => state.chat.isLoading);

  const onSendMessage = (value) => {
    dispatch(
      getActionSendMessage(connectedPseudo, value.trim()),
    );
  };

  return (
    <MessageFormSend
      disabled={isConnected}
      onSendMessage={onSendMessage}
      isLoading={isLoading}
    />
  );
}
ContainerFormSend.propTypes = {};

ContainerFormSend.defaultProps = {};

export default React.memo(ContainerFormSend);
