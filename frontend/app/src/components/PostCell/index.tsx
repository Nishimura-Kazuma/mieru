import * as React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import '../PostList/index.css';

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
      <div className="Card">
        <span className="underbar">{userName}</span>
        <span className="textcenter">{title}</span>
        {isCompleted ? (
          <div className="right">
            <span style={{ color: 'green' }}>解決しました!</span>
            <TaskAltIcon color="success" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

// const PostCell: React.FC<ListItemProps> = ({
//   title,
//   userName,
//   isCompleted,
// }) => {
//   return (
//     <>
//       <List
//         sx={{
//           width: '100%',
//           maxWidth: 360,
//           bgcolor: 'background.paper',
//           border: 'solid 3px #87cefa',
//           borderRadius: '12px',
//         }}
//       >
//         <ListItem alignItems="flex-start">
//           <ListItemText
//             primary={
//               <React.Fragment>
//                 <Typography sx={{ display: 'inline', fontSize: '20px' }}>
//                   {title}
//                 </Typography>
//                 {/* 解決済みの場合チェックマークを表示 */}
//                 {isCompleted ? <TaskAltIcon></TaskAltIcon> : <></>}
//               </React.Fragment>
//             }
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   sx={{ display: 'inline' }}
//                   component="span"
//                   variant="body2"
//                   color="text.primary"
//                   textAlign={'right'}
//                 >
//                   {userName}
//                 </Typography>

//                 {/* 解凍済みの場合、チェックマーク */}
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//       </List>
//     </>
//   );
// };

export default PostCell;
