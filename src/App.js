import React from 'react';
import './assets/normalize.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Header';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/">Home</Route>
          <Route path="/search">Search</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
