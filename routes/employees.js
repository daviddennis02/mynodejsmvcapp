const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employees');

router.get('/', employeeController.list);
router.get('/:id', employeeController.view);

module.exports = router;