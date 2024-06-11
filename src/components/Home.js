// src/components/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h2>Welcome to the NYU Barbell</h2>
      <p>This is the home page</p>
    </div>
  );
}

export default Home;