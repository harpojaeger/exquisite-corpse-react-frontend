var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var PoemContainer = require('./PoemContainer')
var Editor = require('./Editor')
var api = require('../../utils/api')


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: []
    }

    this.updateCompletedPoems = this.updateCompletedPoems.bind(this)
  }

  componentDidMount () {
    this.updateCompletedPoems()
  }

  updateCompletedPoems() {
    // Need to move this function into <App /> and figure out how to pass it to <CompletedPoems /> so that <Editor /> has access to it too.
    api.completed()
      .then(function(poems) {
        this.setState({
          poems: poems
        })
      }.bind(this))
  }

  render() {
    return (
      <div>
        <Editor />
        <PoemContainer poems={this.state.poems}/>
      </div>
    )
  }
}

App.propTypes = {
  poems: PropTypes.array,
}

module.exports = App
