import './App.css';
import Header from './components/Header'
import UserInfo from './components/UserInfo'
import CreatePost from './components/CreatePost'
import Advertisement from './components/Advertisement'
import Post from './components/Post'

function App() {
  return (
    <>
      <Header/>
      <div className="content flex-row justify-content-between">
        <UserInfo/>
        <div className="central-column flex-col">
          <CreatePost/>
          <Post/>
        </div>
        <Advertisement/>
      </div>
    </>
  );
}


export default App;
