import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <div className="login-main">
        <Login className="login-main-content" />
        <img className="login-main-image" src="https://usersnap.com/blog/wp-content/uploads/2017/04/web-design-background.png" alt="" />
      </div>
      {/* <Register className="login-main-content" /> */}
    </div>
  );
}

export default App;
