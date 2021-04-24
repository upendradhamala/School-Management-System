import mongoose from 'mongoose'
const studentAttendanceSchema = mongoose.Schema({
  class_teacher: {
    type: String,
    required: true,
  },
  attendance_date: {
    type: Date,
    default: Date.now(),
  },
  classname: {
    type: String,
    required: true,
  },
  students: [
    {
      student_name: {
        type: String,
        required: true,
      },
      classname: {
        type: String,
        required: true,
      },
      roll_no: {
        type: Number,
        required: true,
      },
      present: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ],
})

const StudentAttendance = mongoose.model(
  'StudentAttendance',
  studentAttendanceSchema
)
export default StudentAttendance
