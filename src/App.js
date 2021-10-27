import React from 'react';
import './assets/normalize.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
          </Route>
          <Route path="/search">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
