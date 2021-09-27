import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/page/HomePage';

const RoutesMenus = [
  {
    key: `home`,
    name: 'home',
    path: `/`,
    url: () => `/`,
    component: HomePage,
  },
];

export const AppRouter = () => (
  <Router>
    <Switch>
      {RoutesMenus.map((page) => (
        <Route exact path={page.path} key={page.key} component={page.component} />
      ))}
    </Switch>
  </Router>
);
