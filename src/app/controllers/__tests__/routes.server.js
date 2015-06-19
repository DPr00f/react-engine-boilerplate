jest.dontMock('../routes.server');

var RoutesController = require('../routes.server');

describe('routes.server.js', function() {
  describe('add', function() {
    let routes;
    let fakeApp;
    beforeEach(function() {
      fakeApp = {
        all: jest.genMockFunction(),
        get: jest.genMockFunction(),
        put: jest.genMockFunction(),
        post: jest.genMockFunction(),
        delete: jest.genMockFunction()
      };
      routes = new RoutesController(fakeApp);
    });
    it('adds of type all', function() {
      routes.add('/', 'ALL', function(){});
      expect(fakeApp.all).toBeCalled();
    });
  });
});
