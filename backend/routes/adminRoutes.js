import express from 'express'
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
const router = express.Router()

router.post(
  '/',
  asyncHandler(async (req, res) => {
    // const students = await Student.find({})
    const { email, password } = req.body
    const user = await Admin.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: null,
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })
)

export default router