import express from 'express'
import asyncHandler from 'express-async-handler'
import NonTeachingStaff from '../models/nonTeachingStaffModel.js'
import capitalize from '../config/capitalize.js'
import Dashboard from '../models/dashboardModel.js'
import NonTeachingStaffSalary from '../models/nonTeachingStaffSalary.js'
import nonTeachingStaffAttendance from '../models/nonTeachingStaffAttendance.js'
import { updateSalaryTotal } from '../utils/dashboardTotals.js'
const router = express.Router()

//following router is for registering the teacher

router.post(
  '/register',

  asyncHandler(async (req, res) => {
    const {
      staff_name,

      qualification,

      address,

      contact_no,
      gender,
      previous_school,

      age,
      email,
      estimated_salary,
      image,
      work,
    } = req.body
    // const staff_info =
    const staff_info =
      await NonTeachingStaff.findOne().sort({ staffId: -1 })
    if (staff_info) {
      var staffId = staff_info.staffId + 1
    } else {
      var staffId = 1
    }

    const registered_by = req.user.name


    const staffname = capitalize(staff_name)
    const new_staff = await NonTeachingStaff.create({
      registered_by,
      staff_name: staffname,
      staffId,

      qualification,

      address,

      contact_no,
      gender,
      previous_school,

      age,
      email,
      estimated_salary,
      image,
      work,
    })
    if (new_staff) {
      const total_staffs = await NonTeachingStaff.countDocuments()
      await Dashboard.findOneAndUpdate(
        { title: 'Working Staffs' },
        { number: total_staffs }
      )
      res.status(201).json({
        message: 'Staff registered successfully',
      })
    } else {
      res.status(400)
      throw new Error('Unable to register the staff')
    }
  })
)
//router for getting all the staffs
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const staffs = await NonTeachingStaff.find({})
    if (staffs.length > 0) {
      res.json(staffs)
    } else {
      res.status(500)
      throw new Error('No staffs found')
    }
  })
)

//following route is for deleting the teacher

router.delete(
  '/delete/:id',
  asyncHandler(async (req, res) => {
    const staff = await NonTeachingStaff.findOne({ staffId: req.params.id })
    if (staff) {
      await staff.deleteOne()
      const total_staffs = await NonTeachingStaff.countDocuments()
      await Dashboard.findOneAndUpdate(
        { title: 'Working Staffs' },
        { number: total_staffs }
      )
      res.json({ message: 'Staff Deleted successfully' })
    } else {
      res.status(404)
      throw new Error('Staff not found with the given ID')
    }
  })
)

//following route is for paying the fees of teachers

router.post(
  '/fees/:name/:id',

  asyncHandler(async (req, res) => {
    const { salaryForTheYear, salaryForTheMonth, salaryAmount } = req.body
    // const teacher_info =
    const staff_info = await NonTeachingStaff.findOne({
      staff_name: capitalize(req.params.name),
      staffId: req.params.id,
    })

    if (staff_info) {
      const admin = req.user.name


      const staffname = capitalize(req.params.name)
      const monthname = capitalize(salaryForTheMonth)
      const new_staff = await NonTeachingStaffSalary.create({
        admin,
        staff_name: staffname,
        staffId: req.params.id,

        salaryForTheYear,
        salaryForTheMonth: monthname,
        salaryAmount,
      })
      if (new_staff) {
        await updateSalaryTotal()
        res.status(201).json({
          message: 'staff salary paid successfully',
        })
      } else {
        res.status(400)
        throw new Error('Unable to pay the salary')
      }
    } else {
      res.status(400)
      throw new Error('staff not found')
    }
  })
)
//router for getting all the staffs
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
