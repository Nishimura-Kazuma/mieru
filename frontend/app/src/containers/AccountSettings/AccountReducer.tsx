import { SAVE_USER_NAME } from './types';

const initialState = {
  userData: { id: 0, name: '' },
};

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER_NAME:
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
