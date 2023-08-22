import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { homePage } from './pages/HomePage';
import { postDtail } from './pages/PostDetailPage';

// type Sample = {
//   id: number;
//   title: string;
//   description: string;
//   completed: boolean;
// };

const App = () => {
  // Todoリストの初期値を空の配列に設定
  // const [todos, setTodos] = useState<Sample[]>([]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const todosData = await getSamples();
  //       setTodos(todosData);
  //     } catch (error) {
  //       console.error('Error while fetching todos:', error);
  //     }
  //   };

  //   fetchTodos();
  // }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/post" component={homePage} />
          <Route exact path="/postDtail:id" component={postDtail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
