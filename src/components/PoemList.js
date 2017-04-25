var React = require('react')
var PropTypes = require('prop-types')
import '../styles/PoemList.css'

function Timestamp(props) {
  return(
    <span className='timestamp'>
      {props.children}
    </span>
  )
}

function Poem(props) {
  return (
    <li key={props.id} className='poem'>
      <div className='meta'>
        <a id={props.id} href='#top' className='poem-title'>
          Poem #{props.id}
        </a>
        {props.starttime && ' ('}
        <Timestamp>{props.starttime}</Timestamp>
        {props.endtime && ' – '}
        <Timestamp>{props.endtime}</Timestamp>
        {props.starttime && ')'}
      </div>
      {props.lines.map( (line, index) =>
        <p className='line' key={index}>{line}</p>
      )}
    </li>
  )
}
Poem.propTypes = {
  id: PropTypes.number.isRequired,
  starttime: PropTypes.string,
  endtime: PropTypes.string,
  lines: PropTypes.array.isRequired,
}

Poem.defaultProps = {
  starttime: '',
  endtime: '',
}

function PoemList(props) {
  return(
    <ul className='no-bullets no-padding'>
      {props.poems.map( (poem) =>
        <Poem key={poem.id} id={poem.id} starttime={poem.starttime} endtime={poem.endtime} lines={poem.lines} />
      )}
    </ul>
  )
}

PoemList.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemList
