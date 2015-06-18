import React from 'react';
import Page from './page.jsx';

class Index extends React.Component {
  onClickHandler() {
    alert(this.props.title);
  }

  render() {
    return (
      <Page {...this.props}>
        <h1>{ this.props.title }</h1>
        <button onClick={this.onClickHandler.bind(this)}>Click!</button>
      </Page>
    );
  }
}

Index.defaultProps = {
  title: "React-Engine Boilerplate"
};

export default Index;
