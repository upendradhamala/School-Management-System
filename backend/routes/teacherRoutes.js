import express from 'express'
import asyncHandler from 'express-async-handler'
import Teacher from '../models/teacherModel.js'
import capitalize from '../config/capitalize.js'
import Dashboard from '../models/dashboardModel.js'
import StudentFees from '../models/studentFeesModel.js'
import TeacherSalary from '../models/teacherSalaryModel.js'
import TeacherAttendance from '../models/teacherAttendanceModel.js'
import NonTeachingStaffSalary from '../models/nonTeachingStaffSalary.js'
import { updateSalaryTotal } from '../utils/dashboardTotals.js'
const router = express.Router()

//following router is for registering the teacher

router.post(
  '/register',

  asyncHandler(async (req, res) => {
    const {
      teacher_name,

      qualification,

      address,

      contact_no,
      gender,
      previous_school,

      age,
      email,
      estimated_salary,
      image,
      subjectToTeach,
    } = req.body
    // const teacher_info =
    const teacher_info =
      await Teacher.findOne().sort({ teacherId: -1 })
    if (teacher_info) {
      var teacherId = teacher_info.teacherId + 1
    } else {
      var teacherId = 1
    }

    const registered_by = req.user.name


    const teachername = capitalize(teacher_name)
    const new_teacher = await Teacher.create({
      registered_by,
      teacher_name: teachername,
      teacherId,

      qualification,

      address,

      contact_no,
      gender,
      previous_school,

      age,
      email,
      estimated_salary,
      image,
      subjectToTeach,
    })
    if (new_teacher) {
      const total_teachers = await Teacher.countDocuments()
      await Dashboard.findOneAndUpdate(
        { title: 'Teachers' },
        { number: total_teachers }
      )
      res.status(201).json({
        message: 'Teacher registered successfully',
      })
    } else {
      res.status(400)
      throw new Error('Unable to register the teacher')
    }
  })
)
//router for getting all the teachers
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const teachers = await Teacher.find({})
    if (teachers.length > 0) {
      res.json(teachers)
    } else {
      res.status(500)
      throw new Error('No Teachers found')
    }
  })
)

//following route is for deleting the teacher

router.delete(
  '/delete/:id',
  asyncHandler(async (req, res) => {
    const teacher = await Teacher.findOne({ teacherId: req.params.id })
    if (teacher) {
      await teacher.deleteOne()
      const total_teachers = await Teacher.countDocuments()
      await Dashboard.findOneAndUpdate(
        { title: 'Teachers' },
        { number: total_teachers }
      )
      res.json({ message: 'Teacher Deleted successfully' })
    } else {
      res.status(404)
      throw new Error('Teacher not found with the given ID')
    }
  })
)

//following route is for paying the fees of teachers

router.post(
  '/fees/:name/:id',

  asyncHandler(async (req, res) => {
    const { salaryForTheYear, salaryForTheMonth, salaryAmount } = req.body
    // const teacher_info =
    const teacher_info = await Teacher.findOne({
      teacher_name: capitalize(req.params.name),
      teacherId: req.params.id,
    })

    if (teacher_info) {
      const admin = req.user.name


      const teachername = capitalize(req.params.name)
      const monthname = capitalize(salaryForTheMonth)
      const new_teacher = await TeacherSalary.create({
        admin,
        teacher_name: teachername,
        teacherId: req.params.id,

        salaryForTheYear,
        salaryForTheMonth: monthname,
        salaryAmount,
      })
      if (new_teacher) {
        await updateSalaryTotal()
        res.status(201).json({
          message: 'Teacher salary paid successfully',
        })
      } else {
        res.status(400)
        throw new Error('Unable to pay the salary')
      }
    } else {
      res.status(400)
      throw new Error('Teacher not found')
    }
  })
)

//for getting information regarding income

//all income generated till now
router.get(
  '/allincome',
  asyncHandler(async (req, res) => {
    const income = await StudentFees.find({})
    if (income.length > 0) {
      res.json(income)
    } else {
      res.status(500)
      throw new Error('No Income made till date')
    }
  })
)

//particular year

router.get(
  '/allincome/:year',
  asyncHandler(async (req, res) => {
    const income = await StudentFees.find({ year: req.params.year })
    if (income.length > 0) {
      res.json(income)
    } else {
      res.status(500)
      throw new Error(`No Income made for year ${req.params.year}`)
    }
  })
)

//paritcular month of particular year
router.get(
  '/allincome/:year/:month',
  asyncHandler(async (req, res) => {
    const income = await StudentFees.find({
      year: req.params.year,
      month_name: capitalize(req.params.month),
    })
    if (income.length > 0) {
      // res.status(201)
      res.json(income)
    } else {
      res.status(500)
      throw new Error(
        `No Income made for month ${req.params.month} of year ${req.params.year}`
      )
    }
  })
)

//the following is for the salary given to the staffs and the  teachers

router.get(
  '/allsalaries',
  asyncHandler(async (req, res) => {
    const salary = await TeacherSalary.find({})
    const staff_salary = await NonTeachingStaffSalary.find({})
    if (salary.length > 0 || staff_salary.length > 0) {
      var new_salary = salary.concat(staff_salary)
      res.json(new_salary)
    } else {
      res.status(500)
      throw new Error('No salary given till date')
    }
  })
)

//particular year

router.get(
  '/allsalary/:year',
  asyncHandler(async (req, res) => {
    const salary = await TeacherSalary.find({
      salaryForTheYear: req.params.year,
    })
    const staff_salary = await NonTeachingStaffSalary.find({
      salaryForTheYear: req.params.year,
    })
    if (salary.length > 0 || staff_salary.length > 0) {
      var new_salary = salary.concat(staff_salary)
      res.json(new_salary)
    } else {
      res.status(500)
      throw new Error(`No salary made for year ${req.params.year}`)
    }
  })
)

//paritcular month of particular year
router.get(
  '/allsalary/:year/:month',
  asyncHandler(async (req, res) => {
    const salary = await TeacherSalary.find({
      salaryForTheYear: req.params.year,
      salaryForTheMonth: capitalize(req.params.month),
    })
    const staff_salary = await NonTeachingStaffSalary.find({
      salaryForTheYear: req.params.year,
      salaryForTheMonth: capitalize(req.params.month),
    })
    if (salary.length > 0 || staff_salary.length > 0) {
      var new_salary = salary.concat(staff_salary)
      res.json(new_salary)
    } else {
      res.status(500)
      throw new Error(
        `No salary made for month ${req.params.month} of year ${req.params.year}`
      )
    }
  })
)

export default router
