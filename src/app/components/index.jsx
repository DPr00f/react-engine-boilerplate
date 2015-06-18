import React from 'react';
import Page from './page.jsx';

class Index extends React.Component {
  render() {
    return (
      <h1>This is person # {this.props.params.id}</h1>
    );
  }
}

Index.defaultProps = {
  title: "React-Engine Boilerplate"
};

export default Index;
