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

    it('of type all', function() {
      routes.add('/', 'ALL', function(){});
      expect(fakeApp.all).toBeCalled();
    });

    it('of type get', function() {
      routes.add('/', 'GET', function(){});
      expect(fakeApp.get).toBeCalled();
    });

    it('of type put', function() {
      routes.add('/', 'PUT', function(){});
      expect(fakeApp.put).toBeCalled();
    });

    it('of type post', function() {
      routes.add('/', 'POST', function(){});
      expect(fakeApp.post).toBeCalled();
    });

    it('of type delete', function() {
      routes.add('/', 'DELETE', function(){});
      expect(fakeApp.delete).toBeCalled();
    });

    it('throws when unknown types', function(){
      expect(function(){
        routes.add('/', 'UNDEFINEDTYPE', function() {});
      }).toThrow();
    });
  });
});
