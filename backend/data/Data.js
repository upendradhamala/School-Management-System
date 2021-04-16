const items = [
  {
    _id: "1",
    title: 'Classes',
    number: 13,
    takeme: '/student_details',
    image: '/images/class.jpg',
  },
  {
    _id: "2",
    title: 'Students',
    takeme: '/student_details',
    number: 2000,
    image: '/images/students.jpg',
  },
  {
    _id: "3",
    title: 'Teachers',
    number: 200,
    image: '/images/teachers.jpg',
  },
  {
    _id: "4",
    title: 'Working Staffs',
    number: 30,
    image: '/images/Non-teaching.jpeg',
  },

  {
    _id: "5",
    title: 'Income',
    number: 1500000,
    image: '/images/Income.jpeg',
  },
  ,
  {
    _id: "6",
    title: 'Salary Expenses',
    number: 500000,
    image: '/images/Expenses.jpeg',
  },
]

//the following export default items is the es module syntax
// export default items
//we will write the common js syntax for now 
module.exports=items
