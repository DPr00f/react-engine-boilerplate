import React from 'react';

class Page extends React.Component {
  getDefaultProps() {
    return {
      title: "React-Engine Boilerplate"
    };
  }


  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>{ this.props.title }</title>
        </head>
        <body>
          { this.props.children }
        </body>
      </html>
    )
  }
}

export default Page;
