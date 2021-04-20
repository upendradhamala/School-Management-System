import express from 'express'
import asyncHandler from 'express-async-handler'
import Student from '../models/studentModel.js'
import capitalize from '../config/capitalize.js'
const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const students = await Student.find({})

    res.json(students)
  })
)
router.get(
  '/class/:id',
  asyncHandler(async (req, res) => {
    const students = await Student.find({ class: req.params.id })
    if (students.length > 0) {
      console.log(students)

      res.json(students)
    } else {
      res.status(404).json({ message: 'No students found.' })
    }
  })
)

//following route is for searching the students with the given name ,class and roll no
router.get(
  '/search/:name/:class/:roll_no',
  asyncHandler(async (req, res) => {
    console.log(req.params.name, req.params.class, req.params.roll_no)
    const student = await Student.find({
      student_name: capitalize(req.params.name),
      class: capitalize(req.params.class),
      roll_no: req.params.roll_no,
    })

    if (student.length > 0) {
      res.json(student)

      // res.json(req.params.name + req.params.class + req.params.roll_no)
    } else {
      res.status(404)
      res.json({ message: 'No student found with the given information.' })
    }
  })
)
export default router
