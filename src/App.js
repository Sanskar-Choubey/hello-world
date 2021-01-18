import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import {Msg} from './components/greet';
import Welcome from './components/welcome';
import Message from './components/JSX';
import Greetings from './components/props';
function App() {
    return (
      <div className="App">
        {/* <Greet />
        <Msg />
        <Welcome /> */}
        {/* <Message /> */}
        <Greetings name='Sanskar' heroName="Gaddar">
          <p>This is the name given to Sanskar</p>
        </Greetings>
        <Greetings name='Sammy' heroName="Samundar"/>
        <Greetings name='Ashray' heroName="Thakaan"/>
      </div>
    );
}

export default App;
