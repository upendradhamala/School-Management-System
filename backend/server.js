// following is the es modules declaration style in nodejs
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import asyncHandler from 'express-async-handler'
import connectDB from './config/db.js'
import Dashboard from './models/dashboardModel.js'
import studentRoutes from './routes/studentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'
import staffRoutes from './routes/staffRoutes.js'
import protect from './middleware/authMiddleware.js'

dotenv.config()

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not set. Add it to your .env file.')
  process.exit(1)
}

connectDB()
const app = express()
app.use(express.json())

// Login is the only public API route. Everything else holds personal data
// (students, parents, staff, fees, salaries) and requires a logged-in admin.
app.use('/api/login', adminRoutes)

app.get(
  '/dashboard',
  protect,
  asyncHandler(async (req, res) => {
    const items = await Dashboard.find()
    res.json(items)
  })
)

app.use('/api/students', protect, studentRoutes)
app.use('/api/teachers', protect, teacherRoutes)
app.use('/api/staffs', protect, staffRoutes)

// NOTE: the old /api/config/cloudinary route was removed on purpose.
// CLOUDINARY_URL contains the Cloudinary API secret and was being sent to
// anyone who asked. The frontend uploads with REACT_APP_CLOUD_NAME and
// REACT_APP_CLOUD_PRESET (an unsigned preset), so it never needed it.

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

// FALL BACK ROUTE for urls not handled above
app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  next(error)
})

app.use((err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  let message = err.message

  // malformed MongoDB ObjectId, e.g. /api/students/delete/abc
  if (err.name === 'CastError') {
    statusCode = 404
    message = 'Resource not found'
  }
  // mongoose schema validation (missing required fields etc.)
  if (err.name === 'ValidationError') {
    statusCode = 400
  }

  res.status(statusCode)
  res.json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
