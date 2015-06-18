import React from 'react';
import Page from './page';

class Index extends React.Component {
  render() {
    return (
      <Page {...this.props}>
        <h1>{ this.props.title }</h1>
      </Page>
    );
  }
}

export default Index;
