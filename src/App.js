import React from 'react';
import './assets/normalize.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
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
