var React = require('react')
var PoemList = require('./PoemList')
var Loader = require('./Loader')
var PropTypes = require('prop-types')
import { Button } from 'react-bootstrap'
import '../styles/PoemContainer.css'

class PoemContainer extends React.Component {
  constructor(props) {
    super(props)
    var perPage = 100
    this.state = {
      quantity: perPage,
      from: 0,
      to: perPage,
      poems: [],
    }
    this.loadMorePoems = this.loadMorePoems.bind(this)
  }

  loadMorePoems(){
    this.setState(function(prevState){
      return {
        to: prevState.to + prevState.quantity,
      }
    })
  }

  componentWillReceiveProps(newprops){
    this.setState({
      poems: newprops.poems,
    })
  }

  render() {
    var numPoemsToLoad = this.state.quantity
    if(this.state.to+this.state.quantity > this.state.poems.length) {
      numPoemsToLoad = this.state.poems.length - this.state.to
    }
    return (
      <div className='poem-container'>
        <h3>Completed poems</h3>
        <Loader visible={ this.props.poems.length === 0 }>Loading...</Loader>
        <PoemList poems={this.state.poems.slice(this.state.from,this.state.to)} />
        <Button
          type='submit'
          name='action'
          onClick={this.loadMorePoems}
          value='add'
          disabled={ this.state.to >= this.state.poems.length }
          className={ 'load-more ' + (this.state.to >= this.state.poems.length && 'hidden') }
          >
          Load {numPoemsToLoad} more poem{ numPoemsToLoad > 1 && 's' }
          {/* {this.state.nextids.first} - {this.state.nextids.last} */}
        </Button>
      </div>
    )
  }
}
PoemContainer.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemContainer
