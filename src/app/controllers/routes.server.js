function serveRoute(app, route) {
  switch (route.type.toLowerCase()) {
    case 'all':
      app.all(route.route, route.func);
      break;
    case 'get':
      app.get(route.route, route.func);
      break;
    case 'post':
      app.post(route.route, route.func);
      break;
    case 'put':
      app.put(route.route, route.func);
      break;
    case 'delete':
      app.delete(route.route, route.func);
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


  add(route, type, func) {
    var obj = { route: route, type: type, func: func };
    this.routes.push(obj);
    serveRoute(this.app, obj);
  }
}

export default RoutesController;
