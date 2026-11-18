import jwt from 'jsonwebtoken'
import Admin from '../models/adminModel.js'
import asyncHandler from 'express-async-handler'

// Verifies the Bearer token and attaches the logged-in admin to req.user.
const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  let decoded
  try {
    decoded = jwt.verify(header.split(' ')[1], process.env.JWT_SECRET)
  } catch (error) {
    res.status(401)
    throw new Error('Not authorized, token failed')
  }

  const user = await Admin.findById(decoded.id).select('-password')
  if (!user) {
    // token is valid but the account no longer exists
    res.status(401)
    throw new Error('Not authorized, user not found')
  }

  req.user = user
  // next() is called outside the try/catch so that errors thrown by later
  // handlers are not misreported as authentication failures
  next()
})

export default protect
