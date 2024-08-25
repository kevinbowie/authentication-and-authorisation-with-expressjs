const express = require('express')
const router = express.Router()
const authentication = require('../service/security/authentication')

const adminController = require('../controllers/adminController')
const authorisation = require('../service/security/authorisation')

router.get('/user', authentication, authorisation('admin'), (req, res) => adminController.load_platform_users(req, res))
router.put('/user/id/:user_id', authentication, authorisation('admin'), (req, res) => adminController.update_user_profile(req, res))
router.get('/user/id/:user_id', authentication, authorisation('admin'), (req, res) => adminController.load_user_profile_by_id(req, res))

module.exports = router;