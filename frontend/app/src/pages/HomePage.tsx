import Header from '../components/Header/header';
import PopUp from '../components/PostFormPopUp/PopUp';
import PostList from '../components/PostList';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  const moveRoot = () => {
    history.push('/');
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <PostList />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <main>
          {/* ここに主要なコンテンツを追加 */}
          {/* <PostList /> */}
          <PopUp />
          <div>
            <Fab
              onClick={moveRoot}
              color="secondary"
              aria-label="add"
              sx={{
                position: 'absolute',
                bottom: (theme: any) => theme.spacing(2),
                left: (theme: any) => theme.spacing(2),
              }}
            >
              <PersonIcon />
            </Fab>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
