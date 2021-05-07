const express = require('express')
const mainController = require('../controllers/mainController')
const router = express.Router()

router.get('/', mainController.index)
router.get('/about', mainController.about)
router.get('/contact', mainController.contact)
router.get('/services', mainController.services)
router.get('/gallery', mainController.gallery)
router.get('/schedule', mainController.schedule)
router.post('/thanks', mainController.thanks)
router.post('/newsletter', mainController.newsletter)



module.exports = router