import mongoose from 'mongoose'
const nonTeachingStaffSalarySchema = mongoose.Schema(
  {
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
      type: String,
      required: true,
    },
    salaryForTheMonth: {
      type: String,
      required: true,
    },
    salaryAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const NonTeachingStaffSalary = mongoose.model(
  'NonTeachingStaffSalary',
  nonTeachingStaffSalarySchema
)
export default NonTeachingStaffSalary
