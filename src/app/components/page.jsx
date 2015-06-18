import React from 'react';

class Page extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>{ this.props.title }</title>
        </head>
        <body>
          { this.props.children }
          <script src="/js/main.js"></script>
        </body>
      </html>
    );
  }
}

export default Page;
