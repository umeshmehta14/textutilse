import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showalert =(message, type) =>{
        setalert({
          msg: message,
          type:type
        })
        setTimeout(() => {
          setalert(null);
        }, 1000);
  }
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#151231';
      showalert("Dark mode has been enabled","success");
      document.title = "Text-utils Dark mode";
      // setInterval(() => {
      //   document.title = "Textutils is amazing Mode";
      // }, 2000);
      // document.title = "Text-utils Dark mode";
      // setInterval(() => {
      //   document.title = "install Textutils is amazing Mode";
      // }, 1500);
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
      document.title = "Text-utils Light mode";
    }
  }

  return (
    <>
    {/* <Navbar title = "WoRdS" aboutText="about " mode = {mode} toggleMode = {toggleMode}/> */}
    <Router>
    <Navbar title = "WoRdS" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    {/* conatiner is a bootstrap class which makes content centre */}
    <div className="container my-3">  {/* my-3=margine give in y for 3 */}
    <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path = "/" element={<TextForm showalert = {showalert} heading="Word Counter" mode = {mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
