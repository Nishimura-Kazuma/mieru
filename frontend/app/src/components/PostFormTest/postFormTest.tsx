import { useForm } from 'react-hook-form';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001';

// 投稿フォームのデータ型定義
interface PostForm {
  title: string;
  content: string;
}

interface PostData {
  title: string;
  content: string;
  user_id: number;
}

const PostFormTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>({ mode: 'onChange' });

  // フォームの submit イベントで呼ばれる関数
  const onSubmit = (formData: PostForm) => {
    const user_id = 1;
    axios
      .post(`${API_BASE_URL}/post`, {
        title: formData.title,
        content: formData.content,
        user_id: user_id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>投稿フォーム (テスト用)</h2>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">title</label>
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

          <label htmlFor="content">content</label>
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

          <button type="submit">登録</button>
        </form>
      </section>
    </>
  );
};

export default PostFormTest;
