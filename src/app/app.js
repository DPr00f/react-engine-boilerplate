import express from 'express';
import renderer from 'react-engine';
import { join as pathJoin } from 'path';
import RoutesController from './controllers/routes.server';
import indexController from './controllers/index.server';

class Application {

  constructor() {
    this.app = express();
    this.routes = new RoutesController(this.app);

    this.configureApp();
    this.setRoutes();
    this.startServer();
  }


  configureApp() {
    this.app.engine('.jsx', renderer.server.create());
    this.app.set('views', pathJoin(__dirname, 'components'));
    this.app.set('view engine', 'jsx');
    this.app.set('view', renderer.expressView);

    this.app.use( express.static(pathJoin(__dirname, '../public')) );
  }


  startServer() {
    this.app.listen(4000);
  }


  setRoutes() {
    this.routes.add('/', 'GET', indexController.render);
  }
}

export default new Application();
