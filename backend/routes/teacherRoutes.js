import express from 'express'
import asyncHandler from 'express-async-handler'
import protect from '../middleware/authMiddleware.js'
import Teacher from '../models/teacherModel.js'
import capitalize from '../config/capitalize.js'
import Dashboard from '../models/dashboardModel.js'

import TeacherSalary from '../models/teacherSalaryModel.js'
import TeacherAttendance from '../models/teacherAttendanceModel.js'
import NonTeachingStaffSalary from '../models/nonTeachingStaffSalary.js'
const router = express.Router()

//following router is for registering the teacher

router.post(
  '/register',
  //the protect used here is used for getting the id of the admin who registered the teacher

  protect,
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
      (await Teacher.find()) &&
      (await Teacher.findOne().sort({ teacherId: -1 }).limit(1))
    console.log('teacher info', teacher_info)
    if (teacher_info) {
      var teacherId = teacher_info.teacherId + 1
    } else {
      var teacherId = 1
    }

    console.log(req.body)
    const registered_by = req.user.name

    console.log(registered_by)

    console.log('teacher id is-', teacherId)
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
    console.log(new_teacher)
    if (new_teacher) {
      const total_teachers = (await Teacher.find()).length
      await Dashboard.findOneAndUpdate(
        { title: 'Teachers' },
        { number: total_teachers }
      )
      console.log('done')
      console.log('total number of students', total_teachers)
      res.status(201).json({
        message: 'Teacher registered successfully',
      })
      console.log('registered successfully')
    } else {
      res.status(400)
      console.log(error)
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
      await teacher.remove()
      const total_teachers = (await Teacher.find()).length
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
  //the protect used here is used for getting the id of the admin who registered the teacher

  protect,
  asyncHandler(async (req, res) => {
    const { salaryForTheYear, salaryForTheMonth, salaryAmount } = req.body
    console.log(req.body)
    // const teacher_info =
    const teacher_info = await Teacher.findOne({
      teacher_name: capitalize(req.params.name),
      teacherId: req.params.id,
    })
    console.log(capitalize(req.params.name + ' ' + req.params.id))

    console.log('teacher info', teacher_info)
    if (teacher_info) {
      const admin = req.user.name

      // console.log(admin)

      // console.log('teacher id is-', teacherId)
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
      console.log(new_teacher)
      if (new_teacher) {
        const Fees = await TeacherSalary.find()
          .select('salaryAmount')
          .select('-_id')
        console.log('Fees', Fees)
        var total_Fees = 0
        // for (i = 0; i < Fees.length; i++) {
        //   total_Fees = Fees[i]
        // }
        var total_Fees = 0
        Fees.map(
          (fee) => (total_Fees = total_Fees + fee.salaryAmount)
          // return total_Fees
        )
        const Fees1 = await NonTeachingStaffSalary.find()
          .select('salaryAmount')
          .select('-_id')
        // for (i = 0; i < Fees.length; i++) {
        //   total_Fees = Fees[i]
        // }
        var total_Fees1 = 0
        Fees1.map(
          (fee) => (total_Fees1 = total_Fees1 + fee.salaryAmount)
          // return total_Fees
        )
        await Dashboard.findOneAndUpdate(
          { title: 'Salary Expenses' },
          { number: total_Fees + total_Fees1 }
        )
        res.status(201).json({
          message: 'Teacher salary paid successfully',
        })
        console.log('paid successfully')
      } else {
        res.status(400)
        console.log(error)
        throw new Error('Unable to pay the salary')
      }
    } else {
      res.status(400)
      throw new Error('Teacher not found')
    }
  })
)
//router for getting all the teachers
// router.get(
//   '/',
//   asyncHandler(async (req, res) => {
//     const teachers = await Teacher.find({})
//     if (teachers.length > 0) {
//       res.json(teachers)
//     } else {
//       res.status(500)
//       throw new Error('No Teachers found')
//     }
//   })
// )

export default router
