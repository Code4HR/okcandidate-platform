import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'

class Layout extends Component {

  render() {

    return (
      <Provider store={this.props.store}>
        <html>

          <head>
            <title>OKCandidate</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/dist/styles/style.css" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          </head>

          <body>
            <div id="app-mount"
              className="app-container"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
            </div>

            {
              this.props.bundle === 'survey' &&
              <script src="/dist/client-bundle.js"></script>
            }

            {
              this.props.bundle === 'admin' &&
              <script src="/dist/admin-bundle.js"></script>
            }

          </body>

        </html>
      </Provider>
    )
  }

}

Layout.propTypes = {
  bundle: PropTypes.string,
  children: PropTypes.any,
  store: PropTypes.object
}

export default Layout
