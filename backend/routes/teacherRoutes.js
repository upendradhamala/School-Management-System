import express from 'express'
import asyncHandler from 'express-async-handler'
import Teacher from '../models/teacherModel.js'
import capitalize from '../config/capitalize.js'

const router = express.Router()
