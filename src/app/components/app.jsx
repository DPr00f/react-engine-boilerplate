import React from 'react';
import Router from 'react-router';
import Page from './page.jsx';

class App extends React.Component {
  render() {
    return (
      <Page {...this.props}>
        <Router.RouteHandler {...this.props} />
      </Page>
    )
  }
}

export default App;
