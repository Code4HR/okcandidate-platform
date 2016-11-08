const React = require('react')
const ReactDOM = require('react-dom')

const Home = require('./environments/Home').default

const mountNode = document.getElementById('app-mount')

ReactDOM.render(
  <Home user={window.state.user} />,
  mountNode
)
