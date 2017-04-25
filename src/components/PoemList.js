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
    <li key={props.poemId} className='poem'>
      <div className='meta'>
        <a id={props.poemId} href='#top' className='poem-title'>
          Poem #{props.poemId}
        </a>
        {props.startTime && ' ('}
        <Timestamp>{props.startTime}</Timestamp>
        {props.endTime && ' – '}
        <Timestamp>{props.endTime}</Timestamp>
        {props.startTime && ')'}
      </div>
      {props.lines.map( (line, index) =>
        <p className='line' key={index}>{line}</p>
      )}
    </li>
  )
}
Poem.propTypes = {
  poemId: PropTypes.number.isRequired,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  lines: PropTypes.array.isRequired,
}

Poem.defaultProps = {
  startTime: '',
  endTime: '',
}

function PoemList(props) {
  return(
    <ul className='no-bullets no-padding'>
      {props.poems.map( (poem) =>
        <Poem key={poem.poemId} poemId={poem.poemId} startTime={poem.startTime} endTime={poem.endTime} lines={poem.lines} />
      )}
    </ul>
  )
}

PoemList.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemList
