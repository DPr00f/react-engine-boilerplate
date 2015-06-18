import React from 'react';
import Router from 'react-router';
import Index from './index.jsx';
import App from './app.jsx';

var routes = (
  <Router.Route handler={App}>
    <Router.Route path="/" name="home" handler={Index}></Router.Route>
    <Router.Route path="/:id" name="person" handler={Index}></Router.Route>
  </Router.Route>
);

export default routes;
