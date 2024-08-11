// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import axios from 'axios';

const App = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    link: '',
    timer: 0,
    isVisible: false,
  });

  useEffect(() => {
    axios.get('http://localhost:3001/api/info').then(response => {
      setBannerData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Banner {...bannerData} />
      <Dashboard />
    </div>
  );
};

export default App;
