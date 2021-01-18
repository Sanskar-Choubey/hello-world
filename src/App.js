import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import {Msg} from './components/greet';
import Welcome from './components/welcome';
import Message from './components/JSX';

function App() {
    return (
      <div className="App">
        {/* <Greet />
        <Msg />
        <Welcome /> */}
        <Message />
      </div>
    );
}

export default App;
