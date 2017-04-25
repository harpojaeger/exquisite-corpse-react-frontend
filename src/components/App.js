var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var PoemList = require('./PoemList')
var PoemNav = require('./PoemNav')
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
    api.completed()
      .then(function(poems) {
        console.log(poems)
        poems.sort( (a,b) => a.id - b.id )
        this.setState({
          poems: poems
        })
      })
  }
  render() {
    // Generate a list of ids for the nav block
    var everyNth = 5
    var navIds = []
    this.state.poems.forEach( (poem) =>
      ( poem.id % everyNth === 0 || poem.id === 1 )
      && navIds.push(poem.id)
    )
    return (
      <div>
        <PoemNav ids={navIds} />
        <PoemList poems={this.state.poems} />
      </div>
    )
  }
}

App.propTypes = {
  poems: PropTypes.array,
}

module.exports = App
