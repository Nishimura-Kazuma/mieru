import Header from '../components/Header/Header';
import PostDetail from '../components/PostDetail';

const PostDtail = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <main>
          {/* ここに主要なコンテンツを追加 */}
          <PostDetail />
        </main>
      </div>
    </div>
  );
};

export default PostDtail;
