var React = require('react')
var PropTypes = require('prop-types')
import '../styles/App.css'
var PoemContainer = require('./PoemContainer')
var Editor = require('./Editor')
var api = require('../../utils/api')
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: []
    }

    this.refreshCompletedPoems = this.refreshCompletedPoems.bind(this)
  }

  componentDidMount () {
    this.refreshCompletedPoems()
  }

  refreshCompletedPoems() {
    api.completed()
      .then(function(poems) {
        this.setState({
          poems: poems
        })
      }.bind(this))
  }

  render() {
    const longEnoughTooltip = (<Tooltip id='long_enough_explanation'>Requiring a minimum poem length has lead to more interesting poems and less trolling.</Tooltip>)
    return (
      <div className='app'>
        <h1>Exquisite Corpse</h1>
        <Editor refreshCompletedPoems={this.refreshCompletedPoems}/>
        <h4>What is this?</h4>
        <p>Collective, anonymous Internet poetry, written one line at a time.  Anybody can contribute a line, seeing only the one that came before.  Once a poem is long enough
        <OverlayTrigger
          overlay={longEnoughTooltip}
          placement='top'>
          <sup><Glyphicon glyph='question-sign' /></sup>
        </OverlayTrigger>
        , you can also choose to end it, at which point the whole thing becomes public.</p>
        <p>Exquisite Corpse began as a Surrealist parlor game in the early 20th century. I created this Internet version in 2009.</p>
        <PoemContainer poems={this.state.poems}/>
      </div>
    )
  }
}

App.propTypes = {
  poems: PropTypes.array,
}

module.exports = App
