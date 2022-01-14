import { action } from 'typesafe-actions';

import type {
  UserLoginProps,
  UserLogoutProps,
  UserUpdateAvatarProps,
  UserUpdateProps,
} from './types';
import { UserTypes } from './types';

export const loginUserAction = (
  username: string,
  password: string,
): UserLoginProps => action(UserTypes.USER_LOGIN, { username, password });

export const logoutUserAction = (): UserLogoutProps =>
  action(UserTypes.USER_LOGOUT);

export const updateUserAction = (currentUser: any): UserUpdateProps =>
  action(UserTypes.USER_UPDATED, { currentUser });

export const updateUserAvatarAction = (avatar: string): UserUpdateAvatarProps =>
  action(UserTypes.USER_UPDATED_AVATAR, { avatar });
