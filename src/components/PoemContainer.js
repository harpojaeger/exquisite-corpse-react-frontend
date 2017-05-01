var React = require('react')
var PoemNav = require('./PoemNav')
var PoemList = require('./PoemList')
var Loader = require('./Loader')
var PropTypes = require('prop-types')
import { Button } from 'react-bootstrap'

class PoemContainer extends React.Component {
  constructor(props) {
    super(props)
    var perPage = 100
    this.state = {
      quantity: perPage,
      from: 0,
      to: perPage,
      poems: []
    }
    this.loadMorePoems = this.loadMorePoems.bind(this)
  }

  loadMorePoems(){
    this.setState(function(prevState){
      return {
        to: prevState.to + prevState.quantity
      }
    })
  }

  componentWillReceiveProps(newprops){
    this.setState({
      poems: newprops.poems
    })
  }

  render() {

    return (
      <div>
        <h3>Completed poems</h3>
        <Loader visible={ this.props.poems.length === 0 }>Loading...</Loader>
        <PoemList poems={this.state.poems.slice(this.state.from,this.state.to)} />
        <Button
          type='submit'
          name='action'
          onClick={this.loadMorePoems}
          value='add'
          disabled={ this.state.to >= this.state.poems.length }
          className={this.state.to >= this.state.poems.length && 'hidden'}
          >
          Load more poems
        </Button>
      </div>
    )
  }
}
PoemContainer.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemContainer
