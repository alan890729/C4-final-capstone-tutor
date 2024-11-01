const express = require('express')
const router = express.Router()

const studentControllers = require('../controllers/student-controllers')

router.post('/become-teacher/:userId', studentControllers.postTeacher)
router.get('/become-teacher', studentControllers.getBecomeTeacherPage)

module.exports = router
