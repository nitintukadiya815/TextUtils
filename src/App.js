import './App.css';
import About from './Componnents/About';
import Navbar from './Componnents/Navbar';
import TextForms from './Componnents/TextForms';
import React, { useState } from 'react';
import ALERT from './Componnents/ALERT';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => { 

      setAlert(null);
    }
      ,1250)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';  
      showAlert("Dark Mode Enabled","success")
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success")
      document.title="TextUtils - Light Mode";
    }
      
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" About = "About" mode={mode} toggleMode = {toggleMode}/>
    <ALERT alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<TextForms heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
    </div>
        </Router>
    {/* <About/> */}
    </> 
);
}
export default App;
