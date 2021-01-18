import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import {Msg} from './components/greet';

function App() {
    return (
      <div className="App">
        <Greet />
        <Msg />
      </div>
    );
}

export default App;
