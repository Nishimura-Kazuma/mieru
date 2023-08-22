import axios from 'axios';


type PostSample = {
  user_id: number;
  title: string;
  content: string;
  is_completed: boolean;
};

const postsample: PostSample = {
  user_id: 1,
  title: "sample title",
  content: "komattyatta",
  is_completed: false,
};

// const data = [user_id: 1,
//   title: "sample title",
//   content: "komattyatta",
//   is_completed: false,
// ]

type CommentSample = {
  user_id: number;
  post_id: number;
  content: string;
  is_best_answer: boolean;
};

const commentsample: CommentSample = {
  user_id: 1,
  post_id: 999,
  content: "sorehakanntanndayo",
  is_best_answer: false,
};

type UserSample = {
  name: string;
  position: string;
};

const usersample: UserSample = {
  name: "野崎 裕太郎",
  position: "保育士"
};

// export const getSamples = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/samples`);
//     return response.data;
//   } catch (error) {
//     console.error('Error while fetching samples:', error);
//     throw error;
//   }
// };

const API_BASE_URL = 'http://localhost:3001';


export const getSamples = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/post`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching samples:', error);
    throw error;
  }
};


export const postSamples =  () => {
  axios.post(`${API_BASE_URL}/post`, postsample)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  // try {
  //   const response = axios.post(`${API_BASE_URL}/post`, postsample);
  //   return response.data;
  // } catch (error) {
  //   console.error('Error while fetching samples:', error);
  //   throw error;
  // }
};



