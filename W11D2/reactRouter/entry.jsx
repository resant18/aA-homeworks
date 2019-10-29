import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
} from 'react-router-dom';
import Rainbow from './components/rainbow.jsx';

const Root = () => (
  // Hash Router will make the router available to all any descendent React Router components such as <Route /> and <Link />
  <HashRouter>
    <Rainbow />
  </HashRouter>
);

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  ReactDOM.render(
    <Root />,
    main
  );
});
