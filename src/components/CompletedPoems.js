var React = require('react')
var CompletedNav = require('./CompletedNav')
var CompletedList = require('./CompletedList')
var api = require('../../utils/api')
var Loader = require('./Loader')

class CompletedPoems extends React.Component {
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
    // Generate a list of ids for the nav block
    var everyNth = 25
    var navIds = []
    this.state.poems.forEach( (poem) =>
      ( poem.id % everyNth === 0 || poem.id === 1 )
      && navIds.unshift(poem.id)
    )
    return (
      <div>
        <Loader visible={ this.state.poems.length === 0 }>Loading finished poems...</Loader>
        <div className={this.state.poems.length ? '' : 'hidden'}>
          <CompletedNav ids={navIds} />
        </div>

        <CompletedList poems={this.state.poems} />
      </div>
    )
  }
}

module.exports = CompletedPoems
