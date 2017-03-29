import React, { PropTypes, Component } from 'react'

class Layout extends Component {

  render() {

    return (
      <html>

        <head>
          <title>OKCandidate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/dist/styles/style.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </head>

        <body>
          <div id="app-mount" dangerouslySetInnerHTML={{ __html: this.props.children }} />

          <script id="app-state"
            dangerouslySetInnerHTML={{
              __html: 'window.state = ' + JSON.stringify(this.props.state)
            }}></script>

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
    )
  }

}

Layout.propTypes = {
  bundle: PropTypes.string,
  state: PropTypes.object,
  children: PropTypes.string,
  store: PropTypes.object
}

export default Layout
