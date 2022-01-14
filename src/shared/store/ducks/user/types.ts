import type { Action } from 'typesafe-actions';

import type { GenderProps } from '~/modules/Profile/constants';

export enum UserTypes {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_LOGOUT = '@user/USER_LOGOUT',
  USER_UPDATED = '@user/USER_UPDATED',
  USER_UPDATED_AVATAR = '@user/USER_UPDATED_AVATAR',
}

export interface UserProps {
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

export interface UserUpdateProps extends Action {
  type: UserTypes.USER_UPDATED;
  payload: { currentUser: any };
}

export interface UserUpdateAvatarProps extends Action {
  type: UserTypes.USER_UPDATED_AVATAR;
  payload: { avatar: string };
}
