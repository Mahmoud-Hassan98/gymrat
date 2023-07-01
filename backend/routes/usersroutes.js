const express = require('express');
const router = express.Router();
const userController = require('../controllers/userscontroller');

router.get('/getdata/:id', userController.getUser);
router.post('/update/:id', userController.handleUpdateUser);


module.exports = router;
