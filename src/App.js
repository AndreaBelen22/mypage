import "./App.css";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Projects from "./Pages/Projects";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Logo from "./Components/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
