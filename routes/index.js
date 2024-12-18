const express = require('express')
const router = express.Router()

const userRoutes = require('./user')
const oauthRoutes = require('./oauth')
const adminRoutes = require('./admin')
const studentRoutes = require('./student')
const tutorRoutes = require('./tutor')
const userControllers = require('../controllers/user-controllers')
const passport = require('../config/passport')
const { authenticate, isGeneralUser, isAdmin, isStudent } = require('../middlewares/auth')

router.use('/user', authenticate, isGeneralUser, userRoutes)
router.use('/oauth', oauthRoutes)
router.use('/admin', authenticate, isAdmin, adminRoutes)
router.use('/student', authenticate, isStudent, studentRoutes)
router.use('/tutor', authenticate, isGeneralUser, tutorRoutes)

router.get('/signup', userControllers.getSignup)
router.post('/signup', userControllers.postSignup)
router.get('/signin', userControllers.getSignin)
router.post('/signin', passport.authenticate('local', { failureFlash: true, failureRedirect: '/signin' }), userControllers.postSignin)
router.post('/logout', userControllers.postLogout)

router.use('/', (req, res, next) => {
  return res.redirect('/tutor')
})

module.exports = router
