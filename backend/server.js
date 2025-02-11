const http = require('http')
// const app = require('./app')
const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Home page!')
})
app.get('/about', (req, res) => {
    res.send('Hello about page!')
})

const myServer = http.createServer(app)

myServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
