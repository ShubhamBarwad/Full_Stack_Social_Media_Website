import './App.css';
import Header from './components/Header'
import UserInfo from './components/UserInfo'

function App() {
  return (
    <>
      <Header/>
      <div className="content flex-row justify-content-between flex-wrap">
        <UserInfo/>
      </div>
    </>
  );
}


export default App;
