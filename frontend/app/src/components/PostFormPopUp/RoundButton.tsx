import Tooltip from '@mui/material/Tooltip';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import SpeedDial from '@mui/material/SpeedDial';

interface Pop {
  popOpen: () => void;
}

export default function FloatingActionButtonSize({ popOpen }: Pop) {
  return (
    <Tooltip title="投稿追加">
      <SpeedDial
        onClick={popOpen}
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      />
    </Tooltip>
  );
}
