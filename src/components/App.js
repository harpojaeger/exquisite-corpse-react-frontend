var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var CompletedPoems = require('./CompletedPoems')


class App extends React.Component {
  render() {
    return (
      <CompletedPoems />
    )
  }
}

App.propTypes = {
  poems: PropTypes.array,
}

module.exports = App
