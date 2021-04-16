const express = require('express')
const items = require('./data/Data')
const app = express()
app.get('/', (req, res) => {
  res.send('API is running.')
})
// app.get('/api/students', (req, res) => {
//   //   res.send('Students route is running .')

//   //following will convert the items to the json format
//   res.json(items)
// })

app.get('/api/students/:classes', (req, res) => {
  const item = items.find((i) => i._id === req.params.classes)
  //   const item = items.find()
//   console.log(item)
  res.json(item)
})
app.listen(5000, console.log('Server running on port 5000'))
