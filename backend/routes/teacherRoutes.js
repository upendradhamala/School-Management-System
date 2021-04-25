import express from 'express'
import asyncHandler from 'express-async-handler'
import protect from '../middleware/authMiddleware.js'
import Teacher from '../models/teacherModel.js'
import capitalize from '../config/capitalize.js'
import TeacherSalary from '../models/teacherSalaryModel.js'
import TeacherAttendance from '../models/teacherAttendanceModel.js'

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
      res.json({ message: 'Teacher Deleted successfully' })
    } else {
      res.status(404)
      throw new Error('Teacher not found with the given ID')
    }
  })
)

//following route is for paying the fees of teachers
export default router
