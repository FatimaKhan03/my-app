import logo from './logo.svg';
import './App.css';
import Dashboard from "./Components/Pages/Dashboard";
import Userprofile from './Components/Pages/Userprofile';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './Components/Pages/NotFound';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Home" component={Dashboard} />
          <Route exact path="/Userprofile" component={Userprofile} />
          <Route component={NotFound} />

        </Switch>

      </div>
    </Router>
  );
}


export default App;
