const express = require('express')
const items = require('./data/Data')
const classes = require('./data/ClassData')
const app = express()
app.get('/', (req, res) => {
  res.send('API is running.')
})
app.get('/api/students', (req, res) => {
  //   res.send('Students route is running .')
  // const items = itemslist.find({})
  //following will convert the items to the json format
  res.json(items)
})
//following route is for displaying the list of students 
//according to the classses
app.get('/api/students/class/:id', (req, res) => {
  const classname = classes.find((i) => i._id === req.params.id)
  //   const item = items.find()
  // console.log(classname)
  // console.log(classes)
  res.json(classname)
})
app.listen(5000, console.log('Server running on port 5000'))
