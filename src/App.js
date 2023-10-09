import "./App.css";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
        setAlert(null)
    },1500)
  }

  const toggleMode = () => {
    if(mode=== "light"){
      setmode("dark")
      document.body.style.backgroundColor= "#042743"
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setmode("light")
        document.body.style.backgroundColor= "white"
        showAlert("Light mode has been enable", "success")

    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
       <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
            <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert}  mode={mode} />
          </Route>
        </Switch>
    </div>
    </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
