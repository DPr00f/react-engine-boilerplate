import Client from 'react-engine/lib/client';

require('../../app/components/**/*.jsx', {glob: true});

var options = {
  viewResolver: (viewName) => {
    return require('../../app/components/' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Client.boot(options);
});
