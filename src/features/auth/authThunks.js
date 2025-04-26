import users from '../../data/users.json';
import { loginSuccess, loginFailure } from './authSlice';

export const loginUser = (username, password) => async (dispatch) => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    dispatch(loginSuccess(user));
  } else {
    dispatch(loginFailure('Invalid username or password.'));
  }
};
