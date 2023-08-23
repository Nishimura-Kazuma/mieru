import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../containers/API_BASE_URL';

interface Post {
  id: number;
  title: string;
  user_name: string;
  // num_of_comments: number;
  // last_updated_at: string;
}

const PostList: React.FC = () => {
  // const posts = [
  //   { id: 1, title: 'Post 1', username: 'User1' },
  //   { id: 2, title: 'Post 2', username: 'User2' },
  // ];

  const [postData, setPostData] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const fetchedPostData: Post[] | null = (
          await axios.get(`${API_BASE_URL}/post/`)
        ).data;
        return setPostData(fetchedPostData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchPostData();
  }, []);

  console.log(postData);

  return (
    <div>
      <h2>投稿一覧</h2>
      {postData ? (
        <ul>
          {postData.map((post) => (
            <li key={post.id} className="list-unstyled">
              <div>
                {/* <p>{post.user_name}</p> */}
                <h3>{post.title}</h3>
                <div></div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>データを読み込んでいます...</p>
      )}
    </div>
  );
};

export default PostList;
