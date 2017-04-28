var React = require('react')
var PropTypes = require('prop-types')
import '../styles/PoemNav.css'

function PoemNav(props) {
  return (
    <ul className='no-bullets no-padding nav'>
      <li className='nav' key='main'>Go to poem:</li>
      {props.ids.map( (id) =>
        <li className='nav' key={id}><a href={'#'+id}>{id}</a></li>
      )}
    </ul>
  )
}

PoemNav.propTypes = {
  ids: PropTypes.array.isRequired,
}

module.exports = PoemNav
