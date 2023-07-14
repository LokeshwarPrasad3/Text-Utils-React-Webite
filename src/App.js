
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ChangeBg from './components/ChangeBg';
import Alert from './components/Alert'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"


// react replace class to className (becuase class is reserver in js)


function App() {

  const [mode, setMode] = useState('dark'); // whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  // button clicking state
  // eslint-disable-next-line
  const [bg, newBg] = useState();

  const setBg = (bg) => {
    newBg('bg'); // bg value is function parameter
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // after set 3 second it values are null
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'WordUtils - darkmode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'WordUtils - lightmode';
    }
  }
  return (
    // only return one element not more
    // if want to return in fragement then use <> </>
    // variable using {var_name}
    // if not have closing tag then using <input   /> closing tag


    <>

      <Router>


        {/* props means passing properties like title heading about section values using parameter of function */}
        {/* and it render according to values */}

        {/* <Navbar title="LokeshwarPrasad" aboutText="About Lokeshwar" />  */}
        {/* if not passing values then defaultProps is taken values */}
        <Navbar title="WordUtiles" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <strong><Alert alert={alert} /></strong>
        <ChangeBg setBg={setBg} />

        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <TextForm heading="Text-Transform-Tool - More operation over words" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
