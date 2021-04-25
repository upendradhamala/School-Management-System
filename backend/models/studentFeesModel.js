import mongoose from 'mongoose'
const studentFeesSchema = mongoose.Schema(
  {
    accountant: {
      type: String,
      required: true,

    },
    student_name: {
      type: String,
      required: true,
    },
    classname: {
      type: String,
      required: true,
    },
    roll_no: {
      type: String,
      required: true,
    },
    month_name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },

    monthly_fees: {
      type: Number,
      required: true,
    },
    hostel_fees: {
      type: Number,
    },
    laboratory_fees: {
      type: Number,
    },
    computer_fees: {
      type: Number,
    },
    exam_fees: {
      type: Number,
    },
    miscellaneous: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

const StudentFees = mongoose.model('StudentFees', studentFeesSchema)
export default StudentFees