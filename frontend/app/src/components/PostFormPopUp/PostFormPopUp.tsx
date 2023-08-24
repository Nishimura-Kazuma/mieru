import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_BASE_URL } from '../../containers/API_BASE_URL';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';

// 投稿フォームのデータ型定義
interface PostForm {
  title: string;
  content: string;
  scope: string;
}

interface Pop {
  onClose: () => void;
}

const PostFormPopUp = ({ onClose }: Pop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>({ mode: 'onChange' });

  // ログインユーザーの情報をReduxから取得
  const userData = useSelector((state: any) => state.userData);
  // フォームの submit イベントで呼ばれる関数
  const onSubmit = (formData: PostForm) => {
    // ログインユーザーのIDを取得 例:userData.userData.id 第一引数はstateの型, 第二引数はstateの中のデータ, 第三引数はstateの中のデータの型
    const user_id = userData.userData.id;
    axios
      .post(`${API_BASE_URL}/post`, {
        title: formData.title,
        content: formData.content,
        user_id: user_id,
        scope: formData.scope,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    onClose();
  };

  const radioButtons = [
    { id: 'all', label: '全員', value: '全員' },
    { id: 'teachers_only', label: '保育士のみ', value: '保育士のみ' },
  ];

  return (
    <>
      <h2>投稿フォーム</h2>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">タイトル</label>
          <br />
          {/* {...register("フィールド名", { ルール })}で、フィールド登録、必ルールを設定 */}
          <TextField
            id="title"
            placeholder="タイトル"
            label="タイトル"
            multiline
            maxRows={4}
            {...register('title', {
              required: 'タイトルを入力して下さい',
              maxLength: { value: 50, message: '50文字以下で入力して下さい' },
            })}
            style={{ height: 100 }}
          />
          <p>{errors.title?.message as React.ReactNode}</p>
          <label htmlFor="content">本文</label>
          <br />
          {/* {...register("フィールド名", { ルール })}で、フィールド登録、必ルールを設定 */}
          <TextField
            id="content"
            placeholder="相談内容"
            label="相談内容"
            multiline
            rows={4}
            maxRows={6}
            {...register('content', {
              required: '内容を入力して下さい',
              maxLength: {
                value: 500,
                message: '500字以`内で入力してください',
              },
            })}
          />
          <p>{errors.content?.message as React.ReactNode}</p>
          <label htmlFor="scope">公開範囲</label>
          <br />
          {/* name 属性を同じにすると1つしかチェックできないようになる */}
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="保育士のみ"
            >
              {radioButtons.map((radio) => {
                const { id, label, value } = radio;
                return (
                  <label key={id}>
                    <FormControlLabel
                      value={value}
                      control={<Radio />}
                      {...register('scope', { required: '入力してください' })}
                      label={label}
                    />
                  </label>
                );
              })}
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleSubmit(onSubmit)}
          >
            送信
          </Button>
        </form>
      </section>
    </>
  );
};

export default PostFormPopUp;
