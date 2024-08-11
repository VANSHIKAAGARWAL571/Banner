import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(10);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/info')
      .then(response => {
        const { description, link, timer, isVisible } = response.data;
        setDescription(description);
        setLink(link);
        setTimer(timer);
        setIsVisible(isVisible);
      })
      .catch(error => {
        console.error("There was an error fetching the banner data!", error);
      });
  }, []);

  const saveSettings = () => {
    // Save banner settings to the backend
    axios.post('http://localhost:3001/api/info', { description, link, timer, isVisible })
      .then(() => {
        alert('Banner settings saved successfully!');
      })
      .catch(error => {
        console.error("There was an error saving the banner data!", error);
      });
  };

  return (
    <div className="dashboard">
      <h2>Banner Controls</h2>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Link:</label>
        <input type="text" value={link} onChange={e => setLink(e.target.value)} />
      </div>
      <div>
        <label>Timer (seconds):</label>
        <input type="number" value={timer} onChange={e => setTimer(Number(e.target.value))} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isVisible} onChange={e => setIsVisible(e.target.checked)} />
          Banner Visible
        </label>
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
};

export default Dashboard;