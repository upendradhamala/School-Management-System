import mongoose from 'mongoose'
const nonTeachingStaffSalarySchema = mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  staff_name: {
    type: String,
    required: true,
  },
  staffId: {
    type: String,
    required: true,
  },
  salaryForTheYear: {
    type: Date,
    required: true,
  },
  salaryForTheMonth: {
    type: Date,
    required: true,
  },
  salaryAmount: {
    type: Number,
    required: true,
  },
})

const NonTeachingStaffSalary = mongoose.model(
  'NonTeachingStaffSalary',
  nonTeachingStaffSalarySchema
)
export default NonTeachingStaffSalary
