const express = require('express');
const router = express.Router();
const paymentController =  require('../controllers/paymentController');


router.post('/paymentproducts', paymentController.postPayment);
router.post('/paymentcoach', paymentController.Paymentcoach);
router.get('/getpayment', paymentController.getPayment);
router.get('/checkcoach', paymentController.GetSubscriptionStatus);
router.get('/getcoachforuser', paymentController.getCoachForUser);




module.exports = router;
