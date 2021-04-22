import express from 'express'
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import generateToken from '../utils/generateToken.js'
import protect from '../middleware/authMiddleware.js'

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
        image: user.image,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })
)

//get logged in user's profile
//may be this route is for fetching information from the token
//stored in the local storge in our browser which is chrome in my case

router.get(
  '/user',
  protect,
  asyncHandler(async (req, res) => {
    const user = await Admin.findById(req.user._id)
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
)

export default router
