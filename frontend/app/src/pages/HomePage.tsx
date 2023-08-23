import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import PostFormPopUp from '../components/PostFormPopUp/PostFormPopUp';
import PostList from '../components/PostList';

const HomePage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <main>
          {/* ここに主要なコンテンツを追加 */}
          <PostList />
          {/* <PostFormPopUp /> */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
