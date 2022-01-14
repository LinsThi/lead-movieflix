import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserTypes } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    name: '',
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
  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        isLogged: true,
        currentUser: {
          name: '',
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
    default:
      return state;
  }
};

export default reducer;
