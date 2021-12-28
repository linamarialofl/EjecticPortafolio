import React,{useEffect} from "react";
import "./App.css";
import SplashScreen from "./SplashScreen";
import Ejetic from "./components/Ejetic";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Portafolio from "./components/Portafolio";
import Imperium from "./components/Imperium";
import Blog from "./components/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  useEffect((e) => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  
  return (
    <Router>
      <div className="App">
        <Ejetic />
        <Switch>
        <Route path="/Imperium">
            <Imperium />
          </Route>
          <Route path="/Nosotros">
            <Nosotros />
          </Route>
          <Route path="/Portafolio">
            <Portafolio/>
          </Route>
          <Route path="/Blog">
            <Blog/>
          </Route>
          <Route path="/">
            <Home />
            <SplashScreen />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
