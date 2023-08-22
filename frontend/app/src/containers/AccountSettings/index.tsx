import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SAVE_USER_NAME, UserActionTypes } from './types';
import { API_BASE_URL } from '../API_BASE_URL';

function FetchUserDataButton() {
  const dispatch = useDispatch();

  const fetchData = async (id: number) => {
    try {
      /*テスト用api */
      // const data = await axios.get(
      //   `https://jsonplaceholder.typicode.com/users/${id}`,
      // );
      const data = await axios.get(`${API_BASE_URL}/user/${id}`);

      const userId: number = data.data.id;
      const userName: string = data.data.name;
      const userAttribute: string = data.data.user_attribute;

      // console.log(userId);
      // console.log(userName);
      // console.log(userAttribute);

      // アクションをディスパッチしてデータをストアに保存
      const action: UserActionTypes = {
        type: SAVE_USER_NAME,
        payload: { id: userId, name: userName, user_attribute: userAttribute },
      };
      dispatch(action);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData(1)}>保護者1</button>
      <button onClick={() => fetchData(2)}>保護者2</button>
      <button onClick={() => fetchData(3)}>保育士1</button>
      <button onClick={() => fetchData(4)}>保育士2</button>
    </div>
  );
}

export default FetchUserDataButton;
