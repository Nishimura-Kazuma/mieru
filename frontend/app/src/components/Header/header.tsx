import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MIERUN_LOGO from '../../assets/mierun_logo.png';

const Header = () => {
  const history = useHistory();
  const userData = useSelector((state: any) => state.userData);
  // const userPoint = useSelector((state: any) => state.userPoint);
  // console.log(userData);
  const moveHome = () => {
    history.push('/posts');
  };

  return (
    <header className="fixed-top d-flex justify-content-between align-items-center p-3 bg-light w-100 border-bottom">
      <div onClick={moveHome}>
        <img src={MIERUN_LOGO} alt="Logo" />
      </div>
      <div style={{ fontSize: '20px' }}>
        name:{' '}
        {userData && userData.userData.name
          ? userData.userData.name
          : 'Loading...'}
      </div>
    </header>
  );
};

export default Header;
