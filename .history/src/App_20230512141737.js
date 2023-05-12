

import './App.css';
import Navtab from './Components/Navtab';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
}

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
    document.body.style.backgroundColor="#1f1c1c";
    showAlert("Dark mode has been enabled","success");
    document.title='Hello-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="#f7f3f2";
      showAlert("Light mode has been enabled","success");
      document.title='Hello-Light Mode';
    }
  }
  return (
   <>
{/* <Router> */}

   <Navtab title="Hello"  mode={mode} toggleMode={toggleMode} aboutUs="about us"/>
    <Alert alert={alert}></Alert>
  <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path='/About' element={<About/>} /> */}
        {/* <About/> */}
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze"/>}/> */}

            {/* </Routes> */}
  
  </div>
  {/* </Router> */}
   </>
  );
}

export default App;
