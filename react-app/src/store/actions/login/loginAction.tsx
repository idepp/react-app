import {
  USER_LOGIN,
  USER_LOGOUT
} from "./loginActionType";



export const userLogoutAction = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const userLoginAction = (username: string, password: string) => {
  return {
    username,
    password,
    type: USER_LOGIN,
  };
};
