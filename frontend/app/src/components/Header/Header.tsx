import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MIERUN_LOGO from '../../assets/mierun_logo.png';
import './img.css';

const points = [200, 130, 70, 250, 20, 80, 550, 54];

const Header = () => {
  const history = useHistory();
  const userData = useSelector((state: any) => state.userData);
  // const userPoint = useSelector((state: any) => state.userPoint);
  // console.log(userData);
  const moveHome = () => {
    history.push('/posts');
  };

  return (
    <>
      <header className="fixed-top d-flex justify-content-between align-items-center p-3 bg-light w-100 border-bottom">
        <div onClick={moveHome}>
          <img src={MIERUN_LOGO} alt="Logo" className="imgwidth" />
        </div>
        <div style={{ fontSize: '20px' }}>
          {userData && userData.userData.name ? (
            <>
              <div>{userData.userData.name}</div>
              <div>{points[userData.userData.id]}</div>
            </>
          ) : (
            'Loading...'
          )}
        </div>
      </header>
      <div className="headerup"></div>
    </>
  );
};

export default Header;
