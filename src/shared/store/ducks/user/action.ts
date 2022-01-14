import { action } from 'typesafe-actions';

import type { UserLoginProps, UserLogoutProps } from './types';
import { UserTypes } from './types';

export const loginUserAction = (
  username: string,
  password: string,
): UserLoginProps => action(UserTypes.USER_LOGIN, { username, password });

export const logoutUserAction = (): UserLogoutProps =>
  action(UserTypes.USER_LOGOUT);
