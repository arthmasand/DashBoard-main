// App.js
import './App.css';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Todo from './Components/Todo/Todo';
import Crypto from './Components/Crypto/Crypto';
import GoogleSlide from './Components/GoogleSlide/GoogleSlide';
import Pomodoro from './Components/Greeting/Pomodoro';
import Time from './Components/Time/Time';

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">
        <div className="item bookmarks">
          <Bookmarks />
        </div>
        <div className="item time">
          <Time />
        </div>
        <div className="item pomodoro">
          <Pomodoro />
        </div>
        <div className="item google-slide">
          <GoogleSlide />
        </div>
        <div className="item todo">
          <Todo />
        </div>
        <div className="item crypto">
          <Crypto />
        </div>
      </div>
    </div>
  );
}

export default App;  
