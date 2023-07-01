const express = require('express');
const router = express.Router();
const coachController =  require('../controllers/coachController');

router.post('/addcoach', coachController.addcoach);
router.get('/getcoach', coachController.getcoach);

module.exports = router;