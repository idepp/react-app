import {
  USER_LOGIN,
  USER_LOGOUT
} from "../../actions/login/loginActionType";

import loginData from "../../../static/loginData.json";

export interface ILoginAction {
  username?: string;
  password?: string;
  type: string;
}

export interface IInitialState {
  isLogin: boolean;
  error: string;
}

export const loginInitialState: IInitialState = {
  isLogin: false,
  error: ""
};

const loginStateUpdate = (currentState: IInitialState, action: ILoginAction) => {
  let loginValue: boolean = false;
  let errorString: string = "Invalid Username and password."
  if (action.username === loginData.username && action.password === loginData.password) {
    loginValue = true;
    errorString = "";
  }
  return {
    ...currentState,
    isLogin: loginValue,
    error: errorString
  }
}

const loginReducer = (state: IInitialState = loginInitialState, action: ILoginAction) => {
  const currentState = Object.assign({}, state);
  switch (action.type) {
    case USER_LOGIN:
      return loginStateUpdate(currentState, action);
    case USER_LOGOUT:
      return { ...currentState, isLogin: false , error: ""}
    default:
      return { ...state };
  }
};

export default loginReducer;

