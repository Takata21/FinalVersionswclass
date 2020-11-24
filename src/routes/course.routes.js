const express = require('express')
const router = express.Router()
const { takeCourse } = require('../controllers/course.crontollers')

router.post('/course/newcourse', takeCourse)

module.exports = router