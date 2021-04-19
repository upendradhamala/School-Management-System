import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin1@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Upendra Dhamala',
    email: 'johndoe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
