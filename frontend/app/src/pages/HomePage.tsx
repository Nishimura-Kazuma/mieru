import Header from '../components/Header/Header';
import PopUp from '../components/PostFormPopUp/PopUp';
import PostList from '../components/PostList';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';
import { useHistory } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

const HomePage = () => {
  const history = useHistory();
  const moveRoot = () => {
    history.push('/');
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <PostList />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <main>
          {/* ここに主要なコンテンツを追加 */}
          {/* <PostList /> */}
          <PopUp handleClick={handleClick} />
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
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                送信成功!
              </Alert>
            </Snackbar>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
