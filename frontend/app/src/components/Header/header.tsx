import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const userData = useSelector((state: any) => state.userData);
  // const userPoint = useSelector((state: any) => state.userPoint);
  console.log(userData);
  const moveHome = () => {
    history.push('/posts');
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0px',
        backgroundColor: '#f5f5f5',
        fontSize: '40px',
        width: '100vw',
      }}
    >
      <div onClick={moveHome} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        mierun
      </div>
      <div>
        name: {userData && userData.name ? userData.name : 'Loading...'}
      </div>
    </header>
  );
};

export default Header;
