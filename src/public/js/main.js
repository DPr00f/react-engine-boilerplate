import Client from 'react-engine/lib/client';
import Routes from '../../app/components/routes.jsx';

require('../../app/components/**/*.jsx', {glob: true});

var options = {
  routes: Routes,
  viewResolver: (viewName) => {
    return require('../../app/components/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Client.boot(options);
});
