import { useState, useEffect } from 'react';
import Input from './Input';
import Results from './Results';

function App() {
  const [results, setResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className="container">
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-mode">
        {darkMode ? '☀️' : '🌙'}
      </button>
      <h1>Comparatore Prezzi</h1>
      <Input setResults={setResults} />
      <Results results={results} />
    </div>
  );
}

export default App;
