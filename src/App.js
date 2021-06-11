import logo from './logo.svg';

import './App.css';
import ScreenA from './components/Screen1'
import ScreenB from './components/Screen2'
import ScreenC from './components/Screen3'
import ScreenD from './components/Screen4'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {


  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/">
        <ScreenA/>
      </Route>
      <Route  path="/parts">
        <ScreenB/>
      </Route>
      <Route  path="/assembly">
        <ScreenC/>
      </Route>
      <Route  path="/result">
        <ScreenD/>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
