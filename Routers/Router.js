const router=require('express').Router()
const validateDto = require('../middleware/Validation');
const userSchema = require('../schema/customer_entity');

// router.post('/register', validateDto(userSchema), userController.register);

module.exports = router;
