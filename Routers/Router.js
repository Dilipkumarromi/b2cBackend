const router=require('express').Router()
const validateDto = require('../middleware/Validation');
const userSchema = require('../schema/user');

router.post('/register', validateDto(userSchema), userController.register);

module.exports = router;
