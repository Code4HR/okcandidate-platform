import React, { PropTypes, Component } from 'react'

class Layout extends Component {

  render() {

    console.log('props', this.props.state)

    return (
      <html>

        <head>
          <title>OKCandidate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/dist/styles/style.css" />
        </head>

        <body>

          <div id="app-mount"
            className="app-container"
            dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>

          <script id="app-state"
            dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>

          {
            this.props.bundle === 'client' &&
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
  children: PropTypes.any,
  state: PropTypes.object
}

export default Layout
