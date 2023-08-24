import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../containers/API_BASE_URL';
import PostCell from '../../components/PostCell';

interface Post {
  id: number;
  title: string;
  user_name: string;
  scope: string;
  is_completed: boolean;
  // num_of_comments: number;
  // last_updated_at: string;
}

interface PostListByScope {
  scopeAll: Post[];
  scopeOnlyTeachers: Post[];
}

const PostList: React.FC = () => {
  // const posts = [
  //   { id: 1, title: 'Post 1', username: 'User1' },
  //   { id: 2, title: 'Post 2', username: 'User2' },
  // ];

  const [postData, setPostData] = useState<PostListByScope | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const fetchedPostData: Post[] = (
          await axios.get(`${API_BASE_URL}/post/`)
        ).data;

        const postDataScopeAll: Post[] = fetchedPostData.filter(
          (post) => post.scope === '全員',
        );
        const postDataScopeOnlyTeachers: Post[] = fetchedPostData.filter(
          (post) => post.scope === '保育士のみ',
        );

        const postLists: PostListByScope = {
          scopeAll: postDataScopeAll,
          scopeOnlyTeachers: postDataScopeOnlyTeachers,
        };

        return setPostData(postLists);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchPostData();
  }, []);

  // console.log(postData);

  const loginUserData = useSelector((state: any) => state.userData);
  // console.log(loginUserData.userData);

  return (
    <div>
      <h2 className="Heading">相談一覧</h2>
      {postData && loginUserData ? (
        <>
          {loginUserData.userData.user_attribute === '保育士' ? (
            // ボタンの設置 + スコープによるメッセージの分類
            <div className="CardList">
              {postData.scopeOnlyTeachers.map((post) => (
                <div key={post.id}>
                  <PostCell
                    title={post.title}
                    userName={post.user_name}
                    isCompleted={post.is_completed}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              <p>保護者: スコープが all の質問のみを表示</p>
              <div className="CardList">
                {postData.scopeAll.map((post) => (
                  <div key={post.id}>
                    <PostCell
                      title={post.title}
                      userName={post.user_name}
                      isCompleted={post.is_completed}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <p>データを読み込んでいます...</p>
        </>
      )}
      {/* {postData && loginUserData ? (
          {loginUserData.userData.userAttribute === "保育士" ? (
        <div className="CardList">
          {postData.map((post) => (
            <div key={post.id}>
              <PostCell
                title={post.title}
                userName={post.user_name}
                isCompleted={post.is_completed}
              />
            </div>
          ))}
        </div>
          ):(<></>)}
      ) : (
        <p>データを読み込んでいます...</p>
      )} */}
    </div>
  );
};

export default PostList;
