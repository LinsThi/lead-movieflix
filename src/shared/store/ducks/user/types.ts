import type { Action } from 'typesafe-actions';

import type { GenderProps } from '~/modules/Profile/constants';

export enum UserTypes {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_LOGOUT = '@user/USER_LOGOUT',
}

interface UserProps {
  name: string;
  username: string;
  avatar: string;
  email: string;
  birthDate: string;
  gender: GenderProps;
  password: string;
}

export interface UserState {
  currentUser: UserProps;
  isLogged: boolean;
}

export interface UserLoginProps extends Action {
  type: UserTypes.USER_LOGIN;
  payload: { username: string; password: string };
}

export interface UserLogoutProps extends Action {
  type: UserTypes.USER_LOGOUT;
}
