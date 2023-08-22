import { useEffect, useState } from 'react';
import { getSamples } from './api';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import PostDetailPage from './pages/PostDetailPage';
// import EditPostPage from './pages/EditPostPage';
// import AccoutChange from './pages/AccountChange';

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
    // <div className="container">
    //   <h1>ToDo List</h1>
    //   <ul>
    //     {todos.map((sample: any) => (
    //       <li key={sample.id}>{sample.title}</li>
    //     ))}
    //   </ul>
    // </div>

    <BrowserRouter>
      <Switch>
        <Route exact path="/post" component={HomePage} />
        {/* <Route path="/comment" component={PostDetailPage} />
        <Route path="/comment" component={EditPostPage} />
        <Route path="/account" component={AccountChange} />
        <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
