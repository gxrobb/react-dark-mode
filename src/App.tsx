import React from 'react';
import './App.css';
import useLocalStorage from 'use-local-storage'
import Button from './components/button/button';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // set the current theme value to a string variable
  const currentTheme: string = theme === 'light' ? 'Dark' : 'Light';

  const switchTheme = () => {
    const newTheme: string = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <span>Easy Dark Mode</span>
      <Button onClick={switchTheme} text={`change to ${currentTheme}`} />
    </div>
  );
}

export default App;
