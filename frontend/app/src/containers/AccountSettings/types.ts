export const SAVE_USER_NAME = 'SAVE_USER_NAME';

// User Type
export interface User {
  id: number;
  name: string;
}
// Action Interfaces
interface FetchUserAction {
  type: typeof SAVE_USER_NAME;
  payload: User;
}

export type UserActionTypes = FetchUserAction;
