import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("false");

  return (
    <div className="page" style={{
      backgroundColor : theme === "false"? "white":"grey"
    }}>
      <Header theme= {theme} setTheme = {setTheme}></Header>
      <Body></Body>
    </div>
  );
}

export default App;
