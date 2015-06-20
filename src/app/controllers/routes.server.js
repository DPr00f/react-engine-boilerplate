function serveRoute(app, route) {
  let routeArray = route.mediators;
  routeArray.push(route.func);
  routeArray.shift(route.route);
  switch (route.type.toLowerCase()) {
    case 'all':
      app.all.apply(app, routeArray);
      break;
    case 'get':
      app.get.apply(app, routeArray);
      break;
    case 'post':
      app.post.apply(app, routeArray);
      break;
    case 'put':
      app.put.apply(app, routeArray);
      break;
    case 'delete':
      app.delete.apply(app, routeArray);
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


  add(route, type, func, mediators) {
    var obj = { route: route, type: type, func: func, mediators: mediators || [] };
    this.routes.push(obj);
    serveRoute(this.app, obj);
  }
}

export default RoutesController;
