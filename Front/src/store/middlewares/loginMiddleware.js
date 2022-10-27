import { actionTypeLoginRequest, getActionLogin } from '../../actions/settingsActions';
import loginRequest from '../../requests/loginRequest';

const loginMiddleware = (store) => (next) => async (action) => {
  if (action.type === actionTypeLoginRequest) {
    try {
      const { email, password } = action.payload;
      // on lance la requete de login et on recupere le pseudo retourné par la requete
      const { pseudo } = await loginRequest(
        email,
        password,
      );
      // on a récupéré le pseudo, on re-envoie l'action LOGIN pour demander à modifier le state settings
      store.dispatch(getActionLogin(email, pseudo));
    } catch (err) {
      console.log(err);
    }
    // je ne fais pas le next, car l'action LOGIN_REQUEST que l'on a intercepté
    // n'est pas utile dans les middleware
    return;
  }
  next(action);
};

export default loginMiddleware;
