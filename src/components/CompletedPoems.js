var React = require('react')
var CompletedNav = require('./CompletedNav')
var CompletedList = require('./CompletedList')
var api = require('../../utils/api')

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
    api.completed()
      .then(function(poems) {
        console.log(poems)
        poems.sort( (a,b) => b.id - a.id )
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
        <CompletedNav ids={navIds} />
        <CompletedList poems={this.state.poems} />
      </div>
    )
  }
}

module.exports = CompletedPoems
