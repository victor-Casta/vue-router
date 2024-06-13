import express from 'express'

const app = express()

app.use(express.static('dist'))

app.listen(3080, () => {
  console.log('Example app listening on port 3080!')
})