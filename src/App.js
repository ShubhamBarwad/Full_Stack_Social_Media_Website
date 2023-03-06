import './App.css';
import Header from './components/Header'
import UserInfo from './components/UserInfo'
import CreatePost from './components/CreatePost'
import Advertisement from './components/Advertisement'
import Post from './components/Post'
import profile from './components/resources/harry_potter_profile.jpg'
let userName = "Harry Potter"

function App() {
  return (
    <>
      <Header/>
      <div className="content flex-row justify-content-between">
        <UserInfo profileImg={profile} userName={userName}/>
        <div className="central-column flex-col">
          <CreatePost profileImg={profile}/>
          <Post profileImg={profile}/>
          <Post profileImg={profile}/>
          <Post profileImg={profile}/>
        </div>
        <Advertisement/>
      </div>
    </>
  );
}


export default App;
