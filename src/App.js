import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
