var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var CompletedPoems = require('./CompletedPoems')
var Editor = require('./Editor')


class App extends React.Component {
  render() {
    return (
      <div>
        <Editor />
        <CompletedPoems />
      </div>
    )
  }
}

App.propTypes = {
  poems: PropTypes.array,
}

module.exports = App
