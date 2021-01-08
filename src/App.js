import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'
import Admin from './pages/Admin'
function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
