const express = require('express')
const adminController = require('../controllers/adminController')
const router = express.Router()

//Appointments
router.get('/appointments', adminController.apptIndex)
router.get('/appointments/:id', adminController.singleApptGet)
router.delete('/appointments/:id', adminController.singleApptDelete)
//Messages
router.get('/messages', adminController.msgIndex)
router.post('/messages', adminController.msgPost)
router.get('/messages/:id', adminController.singleMsgGet)
router.delete('/messages/:id', adminController.singleMsgDelete)

module.exports = router