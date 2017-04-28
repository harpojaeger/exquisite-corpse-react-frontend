var React = require('react')
var PoemNav = require('./PoemNav')
var PoemList = require('./PoemList')
var Loader = require('./Loader')
var PropTypes = require('prop-types')
class PoemContainer extends React.Component {
  render() {
    // Generate a list of ids for the nav block
    var everyNth = 25
    var navIds = []
    this.props.poems.forEach( (poem) =>
      ( poem.id % everyNth === 0 || poem.id === 1 )
      && navIds.unshift(poem.id)
    )
    return (
      <div>
        <Loader visible={ this.props.poems.length === 0 }>Loading finished poems...</Loader>
        <div className={this.props.poems.length ? '' : 'hidden'}>
          <PoemNav ids={navIds} />
        </div>

        <PoemList poems={this.props.poems} />
      </div>
    )
  }
}

PoemContainer.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemContainer
