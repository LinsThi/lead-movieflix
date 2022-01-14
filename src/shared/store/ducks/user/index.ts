import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserTypes } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    username: '',
    password: '',
    avatar: '',
    email: '',
    birthDate: '',
    gender: {
      id: 0,
      label: '',
    },
  },
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  const { currentUser } = state;

  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        isLogged: true,
        currentUser: {
          username: payload.username,
          password: payload.password,
          avatar: '',
          email: '',
          birthDate: '',
          gender: {
            id: 0,
            label: '',
          },
        },
      };
    case UserTypes.USER_LOGOUT:
      return INITIAL_STATE;
    case UserTypes.USER_UPDATED:
      return {
        currentUser: payload.currentUser,
        isLogged: true,
      };
    case UserTypes.USER_UPDATED_AVATAR:
      return {
        currentUser: {
          username: currentUser.username,
          password: currentUser.password,
          avatar: payload.avatar,
          email: currentUser.email,
          birthDate: currentUser.birthDate,
          gender: currentUser.gender,
        },
        isLogged: true,
      };
    default:
      return state;
  }
};

export default reducer;
