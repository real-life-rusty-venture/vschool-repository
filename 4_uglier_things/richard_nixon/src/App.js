import logo from './logo.svg';
import './App.css';
import { ConnerText, ContextHolder } from './ContextHolder';
import Form from './Form';
import UglyThings from './UglyThings';
function App() {
  return (
    <ContextHolder>
      <Form/>
      <UglyThings/>
    </ContextHolder>
  );
}

export default App;
