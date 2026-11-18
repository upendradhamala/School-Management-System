import StudentFees from '../models/studentFeesModel.js'
import TeacherSalary from '../models/teacherSalaryModel.js'
import NonTeachingStaffSalary from '../models/nonTeachingStaffSalary.js'
import Dashboard from '../models/dashboardModel.js'

// Totals are computed in MongoDB instead of loading every record into memory.
// $ifNull treats missing optional fees (hostel, lab, ...) as 0; the old code
// added `undefined` and turned the dashboard total into NaN.

const sumField = async (Model, expression) => {
  const [result] = await Model.aggregate([
    { $group: { _id: null, total: { $sum: expression } } },
  ])
  return result ? result.total : 0
}

export const updateIncomeTotal = async () => {
  const total = await sumField(StudentFees, {
    $add: [
      { $ifNull: ['$monthly_fees', 0] },
      { $ifNull: ['$hostel_fees', 0] },
      { $ifNull: ['$laboratory_fees', 0] },
      { $ifNull: ['$computer_fees', 0] },
      { $ifNull: ['$exam_fees', 0] },
      { $ifNull: ['$miscellaneous', 0] },
    ],
  })
  await Dashboard.findOneAndUpdate({ title: 'Income' }, { number: total })
}

export const updateSalaryTotal = async () => {
  const salaryExpr = { $ifNull: ['$salaryAmount', 0] }
  const teachers = await sumField(TeacherSalary, salaryExpr)
  const staffs = await sumField(NonTeachingStaffSalary, salaryExpr)
  await Dashboard.findOneAndUpdate(
    { title: 'Salary Expenses' },
    { number: teachers + staffs }
  )
}
