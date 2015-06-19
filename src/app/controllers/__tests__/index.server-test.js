jest.dontMock('../index.server');

var index = require('../index.server');

describe('index.server.js', function(){
  it('render() calls response.render', function() {
    let request = {
      params: {},
      url: "fakeUrl"
    };
    let response = {
      render: jest.genMockFunction()
    };
    index.render(request, response);

    expect(response.render).toBeCalledWith(
      request.url,
      jasmine.any(Object)
    );
  });
});
