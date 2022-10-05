
import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About'; 


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); //whether Dark Mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils-Light Mode';
    }

  }

 
  return (
    <>
      <Router>
        <Navbar   mode={mode} title="TextUtils" aboutText="About" toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
          </Routes>
        </div>
      </Router>  
    </>
    );
}

export default App;









// <Router>
// <Navbar title= "TextUtils" mode={mode} toggleMode= {toggleMode}/>
// <Alert alert={alert}/>
// <div className="container">
// <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>
//           </Route>
//  </Switch>
//  </div>
//  </Router>
