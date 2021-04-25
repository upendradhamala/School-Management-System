import mongoose from 'mongoose'
const teacherAttendanceSchema = mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  attendance_date: {
    type: Date,
    default: Date.now(),
  },

  teachers: [
    {
      teacher_name: {
        type: String,
        required: true,
      },

      teacherId: {
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

const TeacherAttendance = mongoose.model(
  'TeacherAttendance',
  teacherAttendanceSchema
)
export default TeacherAttendance
