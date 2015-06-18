import indexController from './controllers/index.server';

export default [
  {
    route: '/',
    type: 'GET',
    func: indexController.render
  },
  {
    route: '/:id',
    type: 'GET',
    func: indexController.render
  }
];
