import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../API_BASE_URL';
import { POST_DTAIL_DATA, PostDtailActionTypes } from './types';
import { useEffect } from 'react';

const FetchPostDtailDataButton: React.FC<{ post_id: number }> = ({
  post_id,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPostDtailData = async () => {
      try {
        /*テスト用api */
        // const data = await axios.get(
        //   `https://jsonplaceholder.typicode.com/users/${id}`,
        // );

        const data = await axios.get(`${API_BASE_URL}/post/${post_id}`);

        const postId: number = data.data.id;
        const postTitle: string = data.data.title;
        const postContent: string = data.data.content;
        const postIsCompleted: boolean = data.data.is_completed;
        const postCreatedAt: string = data.data.created_at;
        const postUpdatedAt: string = data.data.updated_at;

        // console.log(postId);
        // console.log(postTitle);
        // console.log(postContent);

        // アクションをディスパッチしてデータをストアに保存
        const action: PostDtailActionTypes = {
          type: POST_DTAIL_DATA,
          payload: {
            id: postId,
            title: postTitle,
            content: postContent,
            is_completed: postIsCompleted,
            created_at: postCreatedAt,
            updated_at: postUpdatedAt,
          },
        };
        dispatch(action);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPostDtailData();
  }, [post_id, dispatch]);

  return null;
};

export default FetchPostDtailDataButton;
