import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import {Msg} from './components/greet';
import Welcome from './components/welcome';
import Message from './components/JSX';
import Greetings from './components/props';
import State from './components/state';
import Counter from './components/counter';

function App() {
    return (
      <div className="App">
        {/* <Greet />
        <Msg />
        <Welcome /> */}
        {/* <Message /> */}
        {/* <Greetings name='Sanskar' heroName="Gaddar">
          <p>This is the name given to Sanskar</p>
        </Greetings>
        <Greetings name='Sammy' heroName="Samundar">
          <button>Click Me</button>
        </Greetings>
        <Greetings name='Ashray' heroName="Thakaan"/>

        <Welcome name="Sanskar" heroName="Gaddar">
          Sanskar is the winner
        </Welcome>
        <Welcome name="Sammy" heroName="Samundar"/>
        <Welcome name="Ashray" heroName="Thakaan"/> */}

        {/* <State /> */}
        <Counter />

      </div>
    );
}

export default App;
