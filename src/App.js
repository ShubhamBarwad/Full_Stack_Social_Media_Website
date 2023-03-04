import './App.css';
import Header from './components/Header'
import UserInfo from './components/UserInfo'
import CreatePost from './components/CreatePost'
import Advertisement from './components/Advertisement'

function App() {
  return (
    <>
      <Header/>
      <div className="content flex-row justify-content-between flex-wrap">
        <UserInfo/>
        <div className="central-column">
          <CreatePost/>
        </div>
        <Advertisement/>
      </div>
    </>
  );
}


export default App;
