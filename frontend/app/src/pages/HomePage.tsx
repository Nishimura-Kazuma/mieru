import Header from '../components/Header/header';
import PostFormTest from '../components/PostFormTest/postFormTest';

const homePage = () => {
  return (
    <>
      <Header user="username" point={100} />
      <PostFormTest />
    </>
  );
};

export { homePage };
