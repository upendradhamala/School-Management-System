import express from 'express'
import asyncHandler from 'express-async-handler'
import Student from '../models/studentModel.js'
import capitalize from '../config/capitalize.js'
import protect from '../middleware/authMiddleware.js'

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

    if (student[0]) {
      res.json(student[0])
    } else {
      res.status(404)
      res.json({ message: 'No student found with the given information.' })
    }
  })
)

//following route is for registering the students

router.post(
  '/register',
  //the protect used here is used for getting the id of the admin who registered the student

  protect,
  asyncHandler(async (req, res) => {
    const {
      student_name,
      classname,

      address,
      parents_name,
      contact_no,
      gender,
    
      age,
      email,
      registration_fees,
      image,
    } = req.body

    console.log(req.body)
    const registered_by = req.user.name
 
    console.log(registered_by)
    const  previous_dues=3333;

    const new_student = await Student.create({
      registered_by,
      student_name,
      email,
      address,
      gender,
      classname,
      contact_no,
      parents_name,
      age,
      previous_dues,
      registration_fees,

      image,
    })
    console.log(new_student)
    if (new_student) {
      res.status(201).json({
        message: 'Student registered successfully',
      })
      console.log('registered successfully')
    } else {
      res.status(400)
      console.log(error)
      throw new Error('Unable to register student')
    }
  })
)

//following route is for paying the fees of students

//following route is for attendance of students

//following route is for admit card of the student

export default router
