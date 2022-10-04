import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
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
  const toggleMode = (cls) =>{
    rebodycls();
    // if(mode === 'light')
    // {
      if(cls === "primary")
      {
      setmode(cls);
      //document.body.classList.add('bg-'+rgb(21, 18, 49));
      document.body.style.backgroundColor = 'rgb(21, 18, 49)';
      showalert("Blue mode has been enabled","success");
      }
      else if(cls === "danger")
      {
      setmode(cls);
      //document.body.classList.add('bg-'+rgb(21, 18, 49));
      document.body.style.backgroundColor = 'rgb(161, 1, 1)';
      showalert("Red mode has been enabled","success");
      }
      else if(cls === "warning")
      {
      setmode(cls);
      //document.body.classList.add('bg-'+rgb(21, 18, 49));
      document.body.style.backgroundColor = 'rgb(160, 160, 7)';
      showalert("Yellow mode has been enabled","success");
      }
      else if(cls === "success")
      {
      setmode(cls);
      //document.body.classList.add('bg-'+rgb(21, 18, 49));
      document.body.style.backgroundColor = 'rgb(9, 82, 9)';
      showalert("Green mode has been enabled","success");
      }
      else if(cls === "light")
      {
      setmode(cls);
      //document.body.classList.add('bg-'+rgb(21, 18, 49));
      document.body.style.backgroundColor = 'rgba(19, 21, 19, 0.2)';
      showalert("light mode has been enabled","success");
    }
    else{
      if(cls === 'dark' || cls === 'primary' || cls === 'success' || cls === 'warning' || cls === 'danger' || cls === 'light')
      {
      rebodycls();
      setmode(cls);
      document.body.classList.add('bg-'+cls);
        document.body.style.backgroundColor = 'rgb(81, 81, 81)';
      showalert("black mode has been enabled","success");
      }
    }
      // document.title = "Text-utils Dark mode";
      // setInterval(() => {
      //   document.title = "Textutils is amazing Mode";
      // }, 2000);
      // document.title = "Text-utils Dark mode";
      // setInterval(() => {
      //   document.title = "install Textutils is amazing Mode";
      // }, 1500);
    // }
    // else
    // {
    //   setmode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showalert("Light mode has been enabled","success");
    //   // document.title = "Text-utils Light mode";
    // }
  }

  const rebodycls = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
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
          <Route exact path="/about" element={<About mode = {mode}/>}></Route>
          <Route exact path = "/" element={<TextForm showalert = {showalert} heading="Word Counter - Character Counter" mode = {mode}/>}>
          {/* <TextForm showalert = {showalert} heading="Word Counter" mode = {mode}/> */}
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
