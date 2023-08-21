import logo from './logo.svg';
import './App.css';
import { Context } from 'react';
import {Contextody, Contexty} from "./Contexty"
import Header from "./Header"
import Form from "./Form"
import Ugly from "./Ugly"
function App() {
  return (
    <Contexty>
      <Header/>
      <Form/>
      <Ugly/>
    </Contexty>
  );
}

export default App;