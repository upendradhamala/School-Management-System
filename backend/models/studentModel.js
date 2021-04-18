import mongoose from 'mongoose '
const studentSchema = mongoose.schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    rollNo: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    parents_name: {
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
    previous_dues: {
      type: Number,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profile_pic: {
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
const Student = mongoose.model('Student', studentSchema)
//Student variable is exported as follow is a ES module.
export default Student
