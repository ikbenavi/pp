import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TVShow from './containers/TVShow';
import Episode from './containers/TVShow/Episode';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={TVShow}/>
      <Route exact path="/episode/:id" component={Episode}/>
    </Switch>
  );
}

export default App;
