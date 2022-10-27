import React from 'react';
import { useDispatch } from 'react-redux';
import { getActionLoginRequest } from '../../actions/settingsActions';

import Settings from '../../components/Settings/Settings';

function ContainerSettings() {
  const dispatch = useDispatch();

  const login = async (email, password) => {
    dispatch(
      getActionLoginRequest(email, password),
    );
  };

  return (
    <Settings
      onLogin={login}
    />
  );
}
Settings.propTypes = {};

Settings.defaultProps = {};

export default React.memo(ContainerSettings);
