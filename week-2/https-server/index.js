const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
})

// create a todo app that lets users to store todos on the server
// create an http server in rust using actix-web
// try to create a http server in c 
