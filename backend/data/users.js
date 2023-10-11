import bcrypt from 'bcryptjs'

export const users = [
  {
    name: 'Admin User 1',
    email: 'admin1@example.com',
    image: 'https://cdn-icons-png.flaticon.com/512/2304/2304226.png',
     password: bcrypt.hashSync('adminpassword1', 10),
    isAdmin:true
  },
  {
    name: 'Admin User 2',
    email: 'admin2@example.com',
    image: 'https://cdn-icons-png.flaticon.com/512/2304/2304226.png',
    password: bcrypt.hashSync('adminpassword2', 10),
    isAdmin: false,
  },
];