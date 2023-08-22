import { useForm } from 'react-hook-form';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../containers/API_BASE_URL';
import { User } from '../../containers/AccountSettings/types';

// 投稿フォームのデータ型定義
interface PostForm {
  title: string;
  content: string;
  scope: string;
}

// interface PostData {
//   title: string;
//   content: string;
//   user_id: number;
// }

// const mapStateToProps = (state: User) => {
//   return { id: state.id, name: state.name, user_attribute: state.user_attribute };
// };

const PostFormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>({ mode: 'onChange' });

  // フォームの submit イベントで呼ばれる関数
  const onSubmit = (formData: PostForm) => {
    const user_id = 1;
    // const is_completed: Boolean = false;
    // console.log(formData);
    axios
      .post(`${API_BASE_URL}/post`, {
        title: formData.title,
        content: formData.content,
        user_id: user_id,
        // is_completed: is_completed,
        scope: formData.scope,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const radioButtons = [
    { id: 'all', label: '全員', value: '全員' },
    { id: 'teachers_only', label: '保育士のみ', value: '保育士のみ' },
  ];

  return (
    <>
      <h2>投稿フォーム (テスト用)</h2>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">タイトル</label>
          <br />
          {/* {...register("フィールド名", { ルール })}で、フィールド登録、必ルールを設定 */}
          <input
            id="title"
            type="title"
            placeholder="タイトル"
            {...register('title', {
              required: 'タイトルを入力して下さい',
              maxLength: { value: 50, message: '50文字以下で入力して下さい' },
            })}
          />
          <p>{errors.title?.message as React.ReactNode}</p>
          <label htmlFor="content">本文</label>
          <br />
          {/* {...register("フィールド名", { ルール })}で、フィールド登録、必ルールを設定 */}
          <input
            id="content"
            type="text"
            placeholder="投稿内容"
            {...register('content', {
              required: '内容を入力して下さい',
              maxLength: { value: 500, message: '500字以内で入力してください' },
            })}
          />
          <p>{errors.content?.message as React.ReactNode}</p>
          <label htmlFor="scope">公開範囲</label>
          <br />
          {/* name 属性を同じにすると1つしかチェックできないようになる */}
          {radioButtons.map((radio) => {
            const { id, label, value } = radio;
            return (
              <label key={id}>
                <input
                  type="radio"
                  value={value}
                  {...register('scope', { required: '入力してください' })}
                />
                {label}
              </label>
            );
          })}
          {/* <input
            id="scope"
            name="scope_selection"
            type="radio"
            value="保護者・保育士全員"
            defaultChecked
          />
          保護者・保育士全員
          <input id="scope" name="scope_selection" type="radio" value="保育士のみ" />
          保育士のみ
          <br /> */}
          <button type="submit">登録</button>
        </form>
      </section>
    </>
  );
};

// export default connect(mapStateToProps)(PostFormTest);
export default PostFormTest;
