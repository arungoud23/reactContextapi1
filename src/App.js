// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

import {ThemeContext}  from './context/ThemeContext' 
import {useContext} from 'react'

function App() {
  const {isTheme} = useContext(ThemeContext)
  return (
    <div className={`App ${isTheme ? "light" : "dark"}`}>
      
      <Navbar />
      <Body />
      
    </div>
  );
}

export default App;
