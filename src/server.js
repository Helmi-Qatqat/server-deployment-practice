'use strict';
const stamper = require('./middlewares/stamper')
const notFound = require('./handlers/404')
const internal = require('./handlers/500')
const express = require('express');
const server = express();


server.get('/', (req,res) => {
  res.send(`Hello`)
}) 

server.get('/userdata', stamper, (req,res) => {
  res.json({
    id: 1,
    name: 'Helmi',
    email: 'Helmi@ltuc.edu',
    time: res.timestamp,
  })
})
server.get('/test500', (req,res) => {
  console.loog(`test`)
})

server.use('*', notFound)
server.use(internal)

function start(port) {
  server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
  })
}

module.exports = {
  start: start,
  server: server,
}
