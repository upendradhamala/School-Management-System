import mongoose from 'mongoose'
const nonTeachingStaffAttendanceSchema = mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  attendance_date: {
    type: Date,
    default: Date.now(),
  },

  staffs: [
    {
      staff_name: {
        type: String,
        required: true,
      },

      staffId: {
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

const nonTeachingStaffAttendance = mongoose.model(
  'nonTeachingStaffAttendance',
  nonTeachingStaffAttendanceSchema
)
export default nonTeachingStaffAttendance
