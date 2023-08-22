import { useEffect, useState } from 'react';
import { getSamples, postSamples } from './api';
// import logo from "./logo.svg";

type Sample = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const App = () => {
  // Todoリストの初期値を空の配列に設定
  const [todos, setTodos] = useState<Sample[]>([]);

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

  const handleButtonClick = () => {
    const res = postSamples();
  };

  const handleButtonClick2 = () => {
    const getres = getSamples();
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>

      <button onClick={handleButtonClick}>送信</button> <br />
      <br/>
      <button onClick={handleButtonClick2}>受信</button>
    </div>
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


//postsテーブルの表示
{/* <ul>
        {todos.map((post: any) => (
          <li key={post.id}>
            post_id: {post.user_id} <br />
            title: {post.title} <br />
            content: {post.content} <br />
            completed: {post.completed} <br />
          
          </li>
        ))}
      </ul> */}


      // <ul>
      //   {todos.map((sample: any) => (
      //     <li key={sample.id}>
      //     {sample.title}</li>
      //   ))}
        
      // </ul>

