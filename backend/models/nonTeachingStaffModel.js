import mongoose from 'mongoose'
const nonTeachingStaffSchema = mongoose.Schema(
  {
    registered_by: {
      type: String,
      required: true,
      ref: 'Admin',
    },
    staff_name: {
      type: String,
      required: true,
    },
    staffId: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    contact_no: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    previous_school: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    estimated_salary: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
//the below is required code for converting the schema to the model
//as per the documentation of mongoose
//any name can be given as a constant in the place of the Student
const NonTeachingStaff = mongoose.model(
  'NonTeachingStaff',
  nonTeachingStaffSchema
)
//NonTeachingStaff variable is exported as follow is a ES module.
export default NonTeachingStaff
