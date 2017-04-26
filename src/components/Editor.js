var React = require('react')
var api = require('../../utils/api')
const Entities = require('html-entities').AllHtmlEntities
const entities = new Entities()
var Loader = require('./Loader')
var spinner = require('../../static/spinner.gif')

function ordinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
 }

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextline: '',
      newline: '',
      poemid: null,
      prompt: '',
      numlines: null,
      promptloading: true,
    }
    this.handleNextLineChange = this.handleNextLineChange.bind(this)
    this.handleNewPoemChange = this.handleNewPoemChange.bind(this)
    this.refreshPrompt = this.refreshPrompt.bind(this)
  }
  componentDidMount() {
    this.refreshPrompt()
  }
  handleNextLineChange(event) {
    this.setState({nextline: event.target.value})
  }

  handleNewPoemChange(event) {
    this.setState({newline: event.target.value})
  }

  refreshPrompt() {
    this.setState({promptloading:true})
    api.random()
    .then(function(poem) {
      this.setState({
        poemid: poem.id,
        numlines: poem.lines.length,
        prompt: poem.lines[poem.lines.length-1],
        promptloading:false,
      })
    }.bind(this))
  }
  render() {
    return(
      <div>
        <div className={this.state.poemid ? '' : 'hidden'}>
          <div>
            Write the {ordinal(this.state.numlines + 1)} line of this poem:
            <Loader visible={this.state.promptloading}><img src={spinner} alt='loading...' /></Loader>
            (<a href='#' onClick={this.refreshPrompt}>get a different prompt</a>)
            <div style={{'fontWeight': 'bold'}}>{entities.decode(this.state.prompt)}</div>
          </div>
          <input type='text' className='editor' value={this.state.nextline} onChange={this.handleNextLineChange}/>
        </div>
        <div>
          <div>
            {this.state.poemid ? 'or s' : 'S'}tart a new poem:
          </div>
          <input type='text' className='editor' value={this.state.newline} onChange={this.handleNewPoemChange} />
        </div>
      </div>
    )
  }
}

module.exports = Editor
