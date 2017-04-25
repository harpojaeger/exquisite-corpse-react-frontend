var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var PoemList = require('./PoemList')
var PoemNav = require('./PoemNav')

class App extends React.Component {
  constructor(props) {
    super(props)
    var poems = props.poems
    poems.sort( (a,b) => a.poemId - b.poemId )
    this.state = {
      poems: props.poems
    }
  }
  render() {
    // Generate a list of ids for the nav block
    var everyNth = 5
    var navIds = []
    this.state.poems.forEach( (poem) =>
      ( poem.poemId % everyNth === 0 || poem.poemId === 1 )
      && navIds.push(poem.poemId)
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
  poems: PropTypes.array.isRequired,
}

module.exports = App
