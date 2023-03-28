import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Home from './components/Home';

import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0c0d2a';
      showAlert("Dark mode has been enabled", "success");
      document.title = `Text Editor - Dark Mode`;
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      document.title = `Text Editor - Light Mode`;
    }
  }
  return (
    <>
      <Navbar title="Free Text Editor" About="About" mode={mode} toggleMode={toggleMode} />
      {/* <Home /> */}
      <Alert alert={alert} />
      <BrowserRouter basename="/TextEditor">
        <div className="container">

          <Routes>
            {/* exact is used why -- for exact matching --> 
            /users -> coponent 1
            /users/component -> coponent 2 */}
            <Route exact path="/about" element={<About mode={mode} />} /> 
            <Route exact path="/textForm" element={<TextForm showAlert={showAlert} mode={mode} />} />
            <Route exact path='/TextEditor' element={<Home mode={mode} />} />
          </Routes>
          {/* <TextForm showAlert={showAlert} mode={mode} /> */}
          {/* <About/> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
