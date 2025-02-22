const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const data = require('./mock/data.json')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .use(bodyParser.json())
  .get('/list', (req, res) => {
    res.send({
      message: 'TIKET KERETA API',
      status: "SUCCESS",
      data: data
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
