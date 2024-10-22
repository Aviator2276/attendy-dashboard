const express = require('express');

const router = express.Router();
const { getAttendanceList } = require('../controllers/attendance');

router.route('/').get(getAttendanceList);

module.exports = router;
