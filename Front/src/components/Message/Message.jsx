import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './messageStyles.scss';

function Message({
  author, text, isMine,
}) {
  return (
    <div className={classNames('message', { message__ismine: isMine })}>
      <div className="message-author">
        {author}
      </div>
      <div className="message-body">
        {text}
      </div>
    </div>
  );
}
Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

Message.defaultProps = {};

export default React.memo(Message);
