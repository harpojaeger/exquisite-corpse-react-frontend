var React = require('react')
var PoemNav = require('./PoemNav')
var PoemList = require('./PoemList')
var Loader = require('./Loader')
var PropTypes = require('prop-types')

class PoemContainer extends React.Component {
  constructor(props) {
    super(props)
    var initialQuantity = 50
    this.state = {
      quantity: initialQuantity,
      from: 0,
      to: initialQuantity,
      poems: []
    }

    this.pageNext = this.pageNext.bind(this)
    this.pagePrevious = this.pagePrevious.bind(this)
  }
  componentWillReceiveProps(newprops){
    this.setState({
      poems: newprops.poems
    })
  }
  pageNext(){
    this.setState(function(prevState){
      console.log(prevState)
      return {
        from: prevState.from + prevState.quantity,
        to: prevState.to + prevState.quantity,
      }
    })
  }
  pagePrevious(prevState){
    this.setState(function(prevState){
      console.log(prevState)
      return {
        from: prevState.from - prevState.quantity,
        to: prevState.to - prevState.quantity,  
      }
    })
  }
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
        <h3>Completed poems</h3>
        <Loader visible={ this.props.poems.length === 0 }>Loading...</Loader>
        {/* <div className={this.props.poems.length ? '' : 'hidden'}>
          <PoemNav ids={navIds} />
        </div> */}

        <PoemList poems={this.state.poems.slice(this.state.from,this.state.to)} />
      </div>
    )
  }
}
PoemContainer.propTypes = {
  poems: PropTypes.array.isRequired,
}

module.exports = PoemContainer
