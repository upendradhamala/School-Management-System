import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Student from '../models/studentModel.js'
//following displays list of students belonging to a particular class
// router.get('/api/students/class/:id', (req, res) => {
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const students = await Student.find({})

    //   const students = classes.find((i) => i._id === req.params.id)

    //   console.log(students)

    res.json(students)
  })
)
router.get(
  '/class/:id',
  asyncHandler(async (req, res) => {
    //   const students = classes.find((i) => i._id === req.params.id)
    const students = await Student.find({ class: req.params.id })
    if (students.length > 0) {
      console.log(students)

      res.json(students)
    } else {
      res.status(404).json({ message: 'No students found.' })
    }
  })
)

//following is for displaying the all classes, I will do it from frontend
// router.get('/api/classes', (req, res) => {
//   //   res.send('Students route is running .')
//   // const items = itemslist.find({})
//   //following will convert the items to the json format
//   res.json(classes)
// })

export default router
