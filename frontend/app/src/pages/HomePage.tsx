import Header from '../components/Header/header';
import PostFormTest from '../components/PostFormTest/postFormTest';
import AccountSettings from './AccountSettings';
// import { User } from '../containers/AccountSettings/types';

const homePage = () => {
  return (
    <>
      <Header />
      <AccountSettings />
      <PostFormTest />
    </>
  );
};

// const mapStateToProps = (state: User) => {
//   return { id: state.id, name: state.name, user_attribute: state.user_attribute };
// };

export { homePage };
