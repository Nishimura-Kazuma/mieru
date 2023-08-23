const PostList: React.FC = () => {
  const posts = [
    { id: 1, title: 'Post 1', username: 'User1' },
    { id: 2, title: 'Post 2', username: 'User2' },
  ];

  return (
    <div>
      <h2>投稿一覧</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="list-unstyled">
            <div>
              <p>{post.username}</p>
              <h3>{post.title}</h3>
              <div></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
