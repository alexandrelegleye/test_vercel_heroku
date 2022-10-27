export const actionTypeLogin = 'SETTINGS/LOGIN';

export function getActionLogin(email, pseudo) {
  return {
    type: actionTypeLogin,
    payload: { email, pseudo },
  };
}

export const actionTypeLoginRequest = 'SETTING/LOGIN_REQUEST';

export function getActionLoginRequest(email, password) {
  return {
    type: actionTypeLoginRequest,
    payload: { email, password },
  };
}
