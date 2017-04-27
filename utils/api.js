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

function nextline(id, line, completed) {
  return axios.put('http://localhost:5000/poems/'+id,
  {
    line: line,
    completed: completed,
  })
  .then(function(res) {
    return res
  })
  .catch(function (e) {
    console.error(e)
    return e
  })
}

function newpoem(line) {
  return axios.post('http://localhost:5000/poems',
    {
      line: line
    }
  )
  .then(function(res) {
    return res
  })
  .catch(function (e) {
    console.error(e)
    return e
  })
}

module.exports = {
  random: random,
  completed: completed,
  nextline: nextline,
  newpoem: newpoem,
}
