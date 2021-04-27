import express from 'express'
import asyncHandler from 'express-async-handler'
import protect from '../middleware/authMiddleware.js'
import NonTeachingStaff from '../models/nonTeachingStaffModel.js'
import capitalize from '../config/capitalize.js'
import Dashboard from '../models/dashboardModel.js'
import NonTeachingStaffSalary from '../models/nonTeachingStaffSalary.js'
import nonTeachingStaffAttendance from '../models/nonTeachingStaffAttendance.js'
import TeacherSalary from '../models/teacherSalaryModel.js'
const router = express.Router()

//following router is for registering the teacher

router.post(
  '/register',
  //the protect used here is used for getting the id of the admin who registered the teacher

  protect,
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
      (await NonTeachingStaff.find()) &&
      (await NonTeachingStaff.findOne().sort({ staffId: -1 }).limit(1))
    console.log('staff info', staff_info)
    if (staff_info) {
      var staffId = staff_info.staffId + 1
    } else {
      var staffId = 1
    }

    console.log(req.body)
    const registered_by = req.user.name

    console.log(registered_by)

    console.log('staff id is-', staffId)
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
    console.log(new_staff)
    if (new_staff) {
      const total_staffs = (await NonTeachingStaff.find()).length
      await Dashboard.findOneAndUpdate(
        { title: 'Working Staffs' },
        { number: total_staffs }
      )
      console.log('done')
      console.log('total number of students', total_staffs)
      res.status(201).json({
        message: 'Staff registered successfully',
      })
      console.log('registered successfully')
    } else {
      res.status(400)
      console.log(error)
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
      await staff.remove()
      const total_staffs = (await NonTeachingStaff.find()).length
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
  //the protect used here is used for getting the id of the admin who registered the teacher

  protect,
  asyncHandler(async (req, res) => {
    const { salaryForTheYear, salaryForTheMonth, salaryAmount } = req.body
    console.log(req.body)
    // const teacher_info =
    const staff_info = await NonTeachingStaff.findOne({
      staff_name: capitalize(req.params.name),
      staffId: req.params.id,
    })
    console.log(staff_info)
    console.log(capitalize(req.params.name + ' ' + req.params.id))

    console.log('staff info', staff_info)
    if (staff_info) {
      const admin = req.user.name

      // console.log(admin)

      // console.log('staff id is-', staffId)
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
      console.log(new_staff)
      if (new_staff) {
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
          message: 'staff salary paid successfully',
        })
        console.log('paid successfully')
      } else {
        res.status(400)
        console.log(error)
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
