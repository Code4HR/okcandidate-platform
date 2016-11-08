const React = require('react')
const ReactDOM = require('react-dom')

const Admin = require('./environments/Admin').default

const mountNode = document.getElementById('app-mount')

ReactDOM.render(
  <Admin user={window.state.user} />,
  mountNode
)
