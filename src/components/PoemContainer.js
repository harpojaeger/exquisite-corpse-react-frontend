var React = require('react')
var PoemNav = require('./PoemNav')
var PoemList = require('./PoemList')
var Loader = require('./Loader')
var PropTypes = require('prop-types')
function PoemContainer(props) {
  // Generate a list of ids for the nav block
  var everyNth = 25
  var navIds = []
  props.poems.forEach( (poem) =>
    ( poem.id % everyNth === 0 || poem.id === 1 )
    && navIds.unshift(poem.id)
  )
  return (
    <div>
      <h3>
        Completed poems
      </h3>
      <Loader visible={ props.poems.length === 0 }>Loading...</Loader>
      <div className={props.poems.length ? '' : 'hidden'}>
        <PoemNav ids={navIds} />
      </div>

      <PoemList poems={props.poems} />
    </div>
  )
}
PoemContainer.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemContainer
