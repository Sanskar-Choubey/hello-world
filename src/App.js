import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import {Msg} from './components/greet';
import Welcome from './components/welcome';
import Message from './components/JSX';
import Greetings from './components/props';
import State from './components/state';
import Counter from './components/counter';
import ClickHandler from './components/FunctionClickHandler';
import Button from './components/ClassClickHandler';
import Bind from './components/BindEvent';
import Conditional from './components/Conditional';
import List from './components/listRendering';
import Style from './components/styleComponent';
import Inline from './components/inlineStyle';
import Controlled from './components/controlledComponents';
import Form from './components/controlledForm';

function App() {
    return (
      <div className="App">
        <Form />
      </div>
    );
}

export default App;
