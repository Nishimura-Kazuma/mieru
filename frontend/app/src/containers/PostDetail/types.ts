export const POST_DTAIL_DATA = 'POST_DTAIL_DATA';

// Post Type
export interface Post {
  id: number;
  title: string;
  content: string;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}
// Action Interfaces
interface FetchPostDtailAction {
  type: typeof POST_DTAIL_DATA;
  payload: Post;
}

export type PostDtailActionTypes = FetchPostDtailAction;
