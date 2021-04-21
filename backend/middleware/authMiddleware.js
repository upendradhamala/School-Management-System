import jwt from 'jsonwebtoken'
import Admin from '../models/adminModel.js'
import asyncHandler from 'express-async-handler'
const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //   console.log(decoded)
      req.user = await Admin.findById(decoded.id).select('-password')
      console.log('value of req.user is ', req.user)
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      //here we can also return the message that our token has expired
      throw new Error('Not authorized, token failed')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export default protect
