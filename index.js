const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello guys ,This is my first container and i am uploading this on the dockerhub')
})

app.listen(4000,() =>{
    console.log ("runing on port 3000")
})