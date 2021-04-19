// following is the es modules declaration style in nodejs
import express from 'express'
// import products from "./data/"
// const express = require('express')
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import items from './data/Data.js'
// import classes from './data/ClassData.js'
import studentRoutes from './routes/studentRoutes.js'
// const items = require('./data/Data')
// const classes = require('./data/ClassData')
// d0t
dotenv.config()
connectDB()
const app = express()
// app.get('/', (req, res) => {
//   res.send('API is running.')
// })
app.get('/dashboard', (req, res) => {
  //   res.send('Students route is running .')
  // const items = itemslist.find({})
  //following will convert the items to the json format
  res.json(items)
})

app.use('/api/students', studentRoutes)
//the following router is for displaying the class labels

//following route is for displaying the list of students
//according to the classses

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}`))
