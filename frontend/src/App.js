import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/ariticles', {
          headers: {
            Authorization: 'Bearer 63273aa23a249e798dfd04b86267d518d03ac78a709a4ea13fef513eda68237fe9f84b78718cce27db9bb9be02bbe29f71c981b79062b998d13c6311bcbf44e21dd6e6bc9898a52bb31ee361064d0b9ca37ef2971b602a6dafafced557ca00ab8dbba1268aa487b09629d77b921faae8713514255b10e3d758f041cd7d304469'
          }
        }); // Replace 'YOUR_API_TOKEN_HERE' with your actual API token
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
        <div>
          <h2>Articles</h2>
          <ul>
            {Array.isArray(data) && data.map(item => (
              <li key={item.id}>
                <p>Title: {item.attributes.Title}</p>
                <p>Code: {item.attributes.code}</p>
                <p>Serial: {item.attributes.serial}</p>
                <p>Created At: {item.attributes.createdAt}</p>
                <p>Updated At: {item.attributes.updatedAt}</p>
                <p>Published At: {item.attributes.publishedAt}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <body>
        <input type=''></input>
      </body>
    </div>
  );
}

export default App;
