import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// import Post from '../PostList';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import { typography } from '@mui/system';

interface ListItemProps {
  title: string;
  userName: string;
  isCompleted: boolean;
}

const PostCell: React.FC<ListItemProps> = ({
  title,
  userName,
  isCompleted,
}) => {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          border: 'solid 3px #87cefa',
          borderRadius: '12px',
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
              <React.Fragment>
                <Typography sx={{ display: 'inline', fontSize: '20px' }}>
                  {title}
                </Typography>
                {/* 解決済みの場合チェックマークを表示 */}
                {isCompleted ? <TaskAltIcon></TaskAltIcon> : <></>}
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  textAlign={'right'}
                >
                  {userName}
                </Typography>

                {/* 解凍済みの場合、チェックマーク */}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default PostCell;

// const commonStyles = {
//   bgcolor: 'white',
//   borderColor: 'brack',
//   m: 1,
//   border: 3,
// };

// export default function PostCell() {
//   return (
// <List
//   sx={{
//     width: '100%',
//     maxWidth: 360,
//     bgcolor: 'background.paper',
//     border: 'solid 3px #87cefa',
//     borderRadius: '12px',
//   }}
// >
// <ListItem alignItems="flex-start">
//   <ListItemText
//     primary={
//       <React.Fragment>
//         <Typography sx={{ display: 'inline', fontSize: '20px' }}>
//           投稿タイトル
//         </Typography>
//         <TaskAltIcon></TaskAltIcon>
//       </React.Fragment>
//     }
//     secondary={
//       <React.Fragment>
//         <Typography
//           sx={{ display: 'inline' }}
//           component="span"
//           variant="body2"
//           color="text.primary"
//           textAlign={'right'}
//         >
//           username - date
//         </Typography>

//         {/* 解凍済みの場合、チェックマーク */}
//       </React.Fragment>
//     }
//   />
// </ListItem>
//     </List>
//   );
// }
