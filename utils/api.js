var axios = require('axios')

function completed() {
  return axios.get('http://localhost:5000/poems/completed')
    .then(function(poems) {
      return poems.data
    })
}

function random() {
  return axios.get('http://localhost:5000/poems/random')
    .then(function(poem) {
      return poem.data
    })
}

module.exports = {
  random: random,
  completed: completed,
}
