import express from 'express'
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import generateToken from '../utils/generateToken.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // Only accept plain strings. Without this, a body like
    // {"email": {"$ne": null}} is passed straight into the MongoDB query.
    if (typeof email !== 'string' || typeof password !== 'string') {
      res.status(400)
      throw new Error('Email and password are required')
    }

    const user = await Admin.findOne({ email: email.trim() })
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

// get the logged in user's profile from the token
router.get(
  '/user',
  protect,
  asyncHandler(async (req, res) => {
    const user = req.user
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  })
)

export default router
