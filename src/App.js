import logo from './logo.svg';
import './App.css';
import { greetings } from './components/exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {greetings}
      </header>
    </div>
  );
}

export default App;
