import React from 'react';
import './assets/normalize.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
<<<<<<< HEAD
import Header from './Header';
=======
>>>>>>> main

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/search">Search</Route>
          <Route path="/">Home</Route>
=======
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" />
          <Route path="/search" />
>>>>>>> main
        </Switch>
      </Router>
    </div>
  );
}

export default App;
