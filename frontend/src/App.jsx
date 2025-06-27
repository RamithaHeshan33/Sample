import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(res => res.text())
      .then(setMessage);
  }, []);

  return (
    <div>
      <h1>{message || 'Loading...'}</h1>
      <p>Welcome to the React frontend!</p>
    </div>
  );
}

export default App;
