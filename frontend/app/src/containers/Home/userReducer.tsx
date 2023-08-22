const SAVE_USER_NAME = 'SAVE_USER_NAME';

const initialState = {
  userData: '',
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER_NAME:
      return {
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
export { SAVE_USER_NAME };
