var axios = require('axios')

function completed() {
  return axios.get('http://localhost:5000/poem/completed')
    .then(function(poems) {
      return poems.data
    })
}

function random() {
  return axios.get('http://localhost:5000/poem/random')
    .then(function(poem) {
      return poem.data
    })
}

module.exports = {
  random: random,
  completed: completed,
}
