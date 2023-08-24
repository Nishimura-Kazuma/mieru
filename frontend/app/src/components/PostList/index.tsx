import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { API_BASE_URL } from '../../containers/API_BASE_URL';
import PostCell from '../../components/PostCell';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  user_id: number;
  user_name: string;
  scope: string;
  is_completed: boolean;
}

interface PostListByScope {
  scopeAll: Post[];
  scopeOnlyTeachers: Post[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const PostList: React.FC = () => {
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

  const loginUserData = useSelector((state: any) => state.userData);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2 className="Heading">相談一覧</h2>
      {postData && loginUserData ? (
        <>
          {loginUserData.userData.user_attribute === '保育士' ? (
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="保育士向け" {...a11yProps(0)} />
                  <Tab label="全体向け" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className="CardList">
                  {postData.scopeOnlyTeachers.map((post) => (
                    <div key={post.id}>
                      <Link
                        to={`/post/${post.user_id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <PostCell
                          title={post.title}
                          userName={post.user_name}
                          isCompleted={post.is_completed}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className="CardList">
                  {postData.scopeAll.map((post) => (
                    <div key={post.id}>
                      <Link
                        to={`/post/${post.user_id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <PostCell
                          title={post.title}
                          userName={post.user_name}
                          isCompleted={post.is_completed}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </CustomTabPanel>
            </Box>
          ) : (
            <div className="CardList">
              {postData.scopeAll.map((post) => (
                <div key={post.id}>
                  <Link
                    to={`/post/${post.user_id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <PostCell
                      title={post.title}
                      userName={post.user_name}
                      isCompleted={post.is_completed}
                    />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p>データを読み込んでいます...</p>
      )}
    </div>
  );
};

export default PostList;
