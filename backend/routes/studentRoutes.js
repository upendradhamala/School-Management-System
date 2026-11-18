import express from 'express'
import asyncHandler from 'express-async-handler'
import Student from '../models/studentModel.js'
import capitalize from '../config/capitalize.js'
import NepaliDate from 'nepali-date-converter'
import StudentFees from '../models/studentFeesModel.js'
import StudentAttendance from '../models/studentAttendanceModel.js'
import Dashboard from '../models/dashboardModel.js'
import { updateIncomeTotal } from '../utils/dashboardTotals.js'
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
    const students = await Student.find({ classname: req.params.id })
    if (students.length > 0) {

      res.json(students)
    } else {
      res.status(404).json({ message: 'No students found.' })
    }
  })
)
// the following route is for loading attendance and students info.
router.get(
  '/class/:id/attendance',
  asyncHandler(async (req, res) => {
    const students = await StudentAttendance.findOne({
      attendance_date: new NepaliDate().format('YYYY-MM-D'),
      classname: req.params.id,
    })
    if (students) {

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
    const student = await Student.findOne({
      student_name: capitalize(req.params.name),
      classname: capitalize(req.params.class),
      roll_no: parseInt(req.params.roll_no),
    })

    if (student) {
      res.json(student)
    } else {
      res.status(404)
      res.json({ message: 'No student found with the given information.' })
    }
  })
)

//following route is for registering the students

router.post(
  '/register',

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
    // const student_info =
    const student_info =
      await Student.findOne({ classname: classname })
        .sort({ roll_no: -1 })
        .limit(1)
    if (student_info) {
      var roll_no = student_info.roll_no + 1
    } else {
      var roll_no = 1
    }
    // (await Student.aggregate({ "$max": '$roll_no', classname: classname }))
    const registered_by = req.user.name

    const previous_dues = 0
    // const roll_no = 3
    const studentname = capitalize(student_name)
    const new_student = await Student.create({
      registered_by,
      student_name: studentname,
      email,
      address,
      gender,
      classname,
      contact_no,
      roll_no,
      parents_name,
      age,
      previous_dues,
      registration_fees,

      image,
    })
    if (new_student) {
      const total_students = await Student.countDocuments()
      await Dashboard.findOneAndUpdate(
        { title: 'Students' },
        { number: total_students }
      )
      res.status(201).json({
        message: 'Student registered successfully',
      })
    } else {
      res.status(400)
      throw new Error('Unable to register student')
    }
  })
)

//following route is for paying the fees of students

//following route is for attendance of students
router.post(
  '/attendance/:classname',
  asyncHandler(async (req, res) => {
    // const students = await Student.find({})
    const { students } = req.body
    const class_teacher = req.user.name
    const attendanceFound = await StudentAttendance.findOne({
      attendance_date: new NepaliDate().format('YYYY-MM-D'),
      classname: req.params.classname,
    })
    if (attendanceFound) {
      await StudentAttendance.updateOne(
        { _id: attendanceFound._id },
        { $set: { students: students } }
      )
      res.status(201).json({ message: 'Attendance retaken successfully' })
    } else {
      const new_attendance = await StudentAttendance.create({
        class_teacher,
        classname: req.params.classname,
        attendance_date: new NepaliDate().format('YYYY-MM-D'),
        students,
      })
      if (new_attendance) {
        res.status(201).json({
          message: 'Attendance taken successfully',
        })
      } else {
        res.status(400)
        throw new Error('Unable to take attendance')
      }
    }
  })
)

//following route is for admit card of the student

//following route is for deleting the student
router.delete(
  '/delete/:id',
  asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (student) {
      await student.deleteOne()
      const total_students = await Student.countDocuments()
      await Dashboard.findOneAndUpdate(
        { title: 'Students' },
        { number: total_students }
      )
      res.json({ message: 'Student removed' })
    } else {
      res.status(404)
      throw new Error('student not found')
    }
  })
)

router.post(
  '/fees/:id',
  asyncHandler(async (req, res) => {
    const {
      student_name,
      classname,
      roll_no,
      month_name,
      year,
      monthly_fees,
      hostel_fees,
      laboratory_fees,
      computer_fees,
      exam_fees,
      miscellaneous,
    } = req.body
    const student = await Student.findById(req.params.id)
    if (student) {
      const accountant = req.user.name
      const fees_submitted = await StudentFees.create({
        accountant,
        student_name,
        classname,
        roll_no,
        month_name,
        year,
        monthly_fees,
        hostel_fees,
        laboratory_fees,
        computer_fees,
        exam_fees,
        miscellaneous,
      })
      if (fees_submitted) {
        await updateIncomeTotal()
        res.status(201).json({ message: 'Fees Paid successfully' })
      } else {
        res.status(400)
        throw new Error('Error occured while paying fees')
      }
    } else {
      res.status(404)
      throw new Error('Student not found')
    }
  })
)

//for the fees of students

export default router
