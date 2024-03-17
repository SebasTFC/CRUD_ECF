const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');


router.get('/',serviceController.list);
router.post('/add',serviceController.save);
router.get('/delete/:id',serviceController.delete);

router.get('/update/:id',serviceController.edit);
router.post('/update/:id',serviceController.update);
module.exports = router;
