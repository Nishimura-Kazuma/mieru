import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const userData = useSelector((state: any) => state.userData);
  // const userPoint = useSelector((state: any) => state.userPoint);
  // console.log(userData);
  const moveHome = () => {
    history.push('/posts');
  };

  const moveRoot = () => {
    history.push('/');
  };

  return (
    <header className="fixed-top d-flex justify-content-between align-items-center p-3 bg-light w-100 border-bottom">
      <div
        onClick={moveHome}
        className="font-weight-bold"
        style={{ cursor: 'pointer', fontSize: '50px' }}
      >
        mierun
      </div>
      <div style={{ fontSize: '30px' }}>
        name: {userData && userData.name ? userData.name : 'Loading...'}
        <button onClick={moveRoot} className="ms-3">
          user
        </button>
      </div>
    </header>
  );
};

export default Header;
