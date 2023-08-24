import { Link } from 'react-router-dom';
import FetchPostDtailDataButton from '../../containers/PostDetail';

const PostList = () => {
  const posts = [
    { id: 1, title: 'Post 1', username: 'User1' },
    { id: 2, title: 'Post 2', username: 'User2' },
  ];

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <div>{post.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
