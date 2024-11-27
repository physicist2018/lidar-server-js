const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = process.env.PORT || 7777

const v1Experiment = require('./v1/routes/experimentRoutes')

app.use(bodyParser.json());
app.use('/api/v1/experiments', v1Experiment)

app.listen(PORT, ()=>{
  console.log(`API is listening on port ${PORT}`)
})
