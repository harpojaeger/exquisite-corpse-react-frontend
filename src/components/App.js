var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var PoemContainer = require('./PoemContainer')
var Editor = require('./Editor')


class App extends React.Component {
  render() {
    return (
      <div>
        <Editor />
        <PoemContainer />
      </div>
    )
  }
}

App.propTypes = {
  poems: PropTypes.array,
}

module.exports = App
