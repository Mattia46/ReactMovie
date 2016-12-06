import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AddMovie } from './Component/AddMovie';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/add" component={AddMovie}/>
  </Route>
</Router>,
  document.getElementById('root')
);
//
//ReactDOM.render(
  //<Router history={hashHistory}>
    //<Route path="/" component={App}>
    //</Route>
  //</Router>
//), document.getElementById('root')
