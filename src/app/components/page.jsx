import React from 'react';
import Router from 'react-router';

class Page extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>{ this.props.title }</title>
        </head>
        <body>
          <ul>
            {[1,2,3,4,5,6,7,8,9,0].map((item) => {
              return (
                <li key={item}>
                  <Router.Link to="person" params={{id: item}}>
                    Person #{item}
                  </Router.Link>
                </li>
              );
            })}
          </ul>
          { this.props.children }
          <script src="/js/main.js"></script>
        </body>
      </html>
    );
  }
}

export default Page;
