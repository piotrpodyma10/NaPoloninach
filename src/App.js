import React from 'react';
import './App.css';
import Home from './Views/Home'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Route
        component={Home}
        exact path="/"
      />
    </BrowserRouter>
  );
}

export default App;
