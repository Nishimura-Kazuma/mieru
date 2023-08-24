import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../containers/API_BASE_URL';
import { Form } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface ReplyForm {
  content: string;
}

const PostDetail: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReplyForm>({ mode: 'onChange' });

  const { id } = useParams<{ id: string }>();
  const post_id = parseInt(id, 10);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postIsCompleted, setPostIsCompleted] = useState(false);
  const [postCreatedAt, setPostCreatedAt] = useState('');
  const [postUpdatedAt, setPostUpdatedAt] = useState('');

  const [data, setData] = useState({ id: null, name: '' });
  useEffect(() => {
    const fetchPostDtailData = async () => {
      try {
        /*テスト用api */
        const data = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${post_id}`,
        );
        // const data = await axios.get(`${API_BASE_URL}/post/${post_id}`);
        // console.log(data);
        setPostTitle(data.data.title);
        setPostContent(data.data.content);
        setPostIsCompleted(data.data.is_completed);
        setPostCreatedAt(data.data.created_at);
        setPostUpdatedAt(data.data.updated_at);
        setData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPostDtailData();
  });

  const post = {
    id: 1,
    title: '相談タイトル1',
    content:
      'helloこんにちはああああああああああああああああああああああああああああああああああああああああああ',
    username: 'User1',
    comments: [
      { id: 1, content: 'Comment 1', username: 'User2' },
      { id: 2, content: 'Comment 2', username: 'User3' },
    ],
  };

  const handleEdit = () => {
    // 編集処理をここに書く
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    // 削除処理をここに書く
    console.log('Delete button clicked');
  };
  const userData = useSelector((state: any) => state.userData);

  const onSubmit = (formData: ReplyForm) => {
    console.log('hess');
    // ログインユーザーのIDを取得 例:userData.userData.id 第一引数はstateの型, 第二引数はstateの中のデータ, 第三引数はstateの中のデータの型
    const user_id = userData.userData.id;
    axios
      .post(`${API_BASE_URL}/post`, {
        user_id: user_id,
        post_id: post.id,
        content: formData.content,
        is_best_answer: false,
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((error) => {
        console.log(error);
        reset();
      });
  };

  return (
    <div className="container mt-5">
      {/* 投稿のカード */}
      <div className="card mb-5">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h5>{post.title}</h5>
            </div>
            <div className="col text-muted">{post.username}</div>
            <div className="col text-right">
              <Button variant="outline-primary" size="sm" onClick={handleEdit}>
                編集
              </Button>{' '}
            </div>
            <div className="col text-right">
              <Button variant="outline-danger" size="sm" onClick={handleDelete}>
                削除
              </Button>
            </div>
          </div>
        </div>
        <div className="card-body">
          {/* <h5 className="card-title">{data.name}</h5> */}
          <p className="card-text">コンビニと食堂どちらに行きますか？</p>
        </div>
      </div>

      {/* 返信（コメント）のカード */}
      {post.comments.map((comment) => (
        <div className="card mt-3" key={comment.id}>
          <div className="card-header bg-secondary text-white">
            <span>{comment.username}</span>
          </div>
          <div className="card-body">
            <p className="card-text">{comment.content}</p>
          </div>
        </div>
      ))}

      {/* 返信入力フォーム */}
      {/* <div>
        <label htmlFor="content">本文</label>
        <br />
        {/* {...register("フィールド名", { ルール })}で、フィールド登録、必ルールを設定 */}
      {/*<TextField
          id="content"
          placeholder="相談内容"
          label="相談内容"
          multiline
          rows={4}
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
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit(onSubmit)}
        >
          送信
        </Button>
      </div> */}

      <div className="mt-5">
        <Form>
          <Form.Group controlId="replyContent">
            <Form.Label>返信内容</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="返信内容を入力してください"
              {...register('content', {
                required: '内容を入力して下さい',
                maxLength: {
                  value: 500,
                  message: '500字以内で入力してください',
                },
              })}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            {/* <Button variant="primary" type="submit"> */}
            送信
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostDetail;
