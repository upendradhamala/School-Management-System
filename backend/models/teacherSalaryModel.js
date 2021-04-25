import mongoose from 'mongoose'
const teacherSalarySchema = mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  teacher_name: {
    type: String,
    required: true,
  },
  teacherId: {
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

const TeacherSalary = mongoose.model('TeacherSalary', teacherSalarySchema)
export default TeacherSalary
