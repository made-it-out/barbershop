const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()
const {requireAuth} = require('../middleware/authMiddleware')

//Appointments
router.get('/appointments', requireAuth, adminController.apptIndex)
router.get('/appointments/:id', requireAuth, adminController.singleApptGet)
router.delete('/appointments/:id', requireAuth, adminController.singleApptDelete)
//Messages
router.get('/messages', requireAuth, adminController.msgIndex)
router.post('/messages', adminController.msgPost)
router.get('/messages/:id', requireAuth, adminController.singleMsgGet)
router.delete('/messages/:id', requireAuth, adminController.singleMsgDelete)
//Auth
router.get('/login', adminController.loginGet)
router.post('/login', adminController.loginPost)
router.get('/logout', adminController.logoutGet)
//Admin
router.get('/admin', requireAuth, adminController.adminGet)

module.exports = router