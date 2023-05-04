const express = require('express');
const router = express.Router();
const mailSendController = require('../Controller/MailSendController');
router.post('/send', mailSendController.sendMail);

module.exports = router;