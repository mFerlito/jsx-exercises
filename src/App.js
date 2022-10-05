import logo from './logo.svg';
import './App.css';
import { GreetingName} from './components/exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      { GreetingName('Marco') }
      </header>
    </div>
  );
}

export default App;
