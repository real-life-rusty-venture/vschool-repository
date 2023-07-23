import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
const name = "a_serbian_film"
const clientId = "c35ce4a01918bfb2298f"
const clientSecret = "ab5c8474a11b223b018505d514c1bf46"
const apiUrl = "https://api.artsy.net/api/tokens/xapp_token"
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI1MDMxOTUzZS1iYjY4LTQ1MzUtOGMyMC02MGY3OTY2MDg3MDIiLCJleHAiOjE2ODk3MTEyNjgsImlhdCI6MTY4OTEwNjQ2OCwiYXVkIjoiNTAzMTk1M2UtYmI2OC00NTM1LThjMjAtNjBmNzk2NjA4NzAyIiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0YWRiODI0NjQ2NzliMDAwY2YwMWYwOCJ9.B1_Eo7R-YkBYcePQhIKEgq3CHpdj57nRNR-00aiMkFE'

function poster() {
  // axios.post(apiUrl, clientId, clientSecret)
  // .then(res => console.log(res))
  // .catch(err => console.log(err))

  const client_id = 'c35ce4a01918bfb2298f';
  const client_secret = 'ab5c8474a11b223b018505d514c1bf46';
  // const api_url = 'https://api.artsy.net/api/tokens/xapp_token/c35ce4a01918bfb2298f/ab5c8474a11b223b018505d514c1bf46';
  const apiUrl = "https://api.artsy.net/api/artworks/artist=picasso"
  const headers = {
    "X-Auth-Token": token,
    'Accept': '/',
    //"Accept": 'application/vnd.artsy-v2+json',
    "Content-type": 'application/json'
  }
   fetch('/artist')
    .then(response => {
      console.log('response', response)
    })
    .catch(error => {
      console.error('Error:', error);
    })
}


function App() {
  React.useEffect(() => { poster() }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
