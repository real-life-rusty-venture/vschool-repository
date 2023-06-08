//import { dataMap } from './love';
import logo from './logo.svg';
import './App.css';
import { dataMap} from './dataMap';
function App() {
 console.log(dataMap)
  console.log("anything")
  return (
    <div className="App">
      <header className="App-header">
        {dataMap}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lol <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//clean yay
