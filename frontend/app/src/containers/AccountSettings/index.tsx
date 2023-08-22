import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SAVE_USER_NAME, UserActionTypes } from './types';
import { API_BASE_URL } from '../API_BASE_URL';

function FetchUserDataButton() {
  const dispatch = useDispatch();

  const fetchUserData = async (id: number) => {
    try {
      /*テスト用api */
      // const data = await axios.get(
      //   `https://jsonplaceholder.typicode.com/users/${id}`,
      // );
      const data = await axios.get(`${API_BASE_URL}/user`);

      const userId: number = data.data.id;
      const userName: string = data.data.name;

      // アクションをディスパッチしてデータをストアに保存
      const action: UserActionTypes = {
        type: SAVE_USER_NAME,
        payload: { id: userId, name: userName },
      };
      dispatch(action);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">ユーザー選択</h1>
      <button
        onClick={() => fetchUserData(1)}
        className="btn btn-primary btn-lg btn-block mb-3 w-50"
      >
        保護者1
      </button>
      <button
        onClick={() => fetchUserData(2)}
        className="btn btn-primary btn-lg btn-block mb-3 w-50"
      >
        保護者2
      </button>
      <button
        onClick={() => fetchUserData(3)}
        className="btn btn-success btn-lg btn-block mb-3 w-50"
      >
        保育士1
      </button>
      <button
        onClick={() => fetchUserData(4)}
        className="btn btn-success btn-lg btn-block mb-3 w-50"
      >
        保育士2
      </button>
    </div>
  );
}

export default FetchUserDataButton;
