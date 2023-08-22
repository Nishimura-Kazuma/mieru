import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SAVE_USER_NAME } from './userReducer';

const API_BASE_URL = 'http://localhost:3001';

function FetchDataButton() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await axios.get(`${API_BASE_URL}/account_setting`);

      // アクションをディスパッチしてデータをストアに保存
      dispatch({
        type: SAVE_USER_NAME,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>ユーザー1</button>
    </div>
  );
}

export default FetchDataButton;
