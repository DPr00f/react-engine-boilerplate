function serveRoute(app, route) {
  switch (route.type.toLowerCase()) {
    case 'all':
      app.all(route.route, ...route.mediators, route.func);
      break;
    case 'get':
      app.get(route.route, ...route.mediators, route.func);
      break;
    case 'post':
      app.post(route.route, ...route.mediators, route.func);
      break;
    case 'put':
      app.put(route.route, ...route.mediators, route.func);
      break;
    case 'delete':
      app.delete(route.route, ...route.mediators, route.func);
      break;
    default:
      throw new Error(route.type + ' is not as a valid request type.');
  }
}

class RoutesController {
  constructor(app) {
    this.app = app;
    this.routes = [];
  }


  add(route, type, func, mediators = []) {
    var obj = { route: route, type: type, func: func, mediators: mediators };
    this.routes.push(obj);
    serveRoute(this.app, obj);
  }
}

export default RoutesController;
