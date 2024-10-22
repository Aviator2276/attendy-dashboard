const { StatusCodes } = require('http-status-codes');
const attendanceDB = require('../db/attendance.json');

const getAttendanceList = async (req, res) => {
  res.status(StatusCodes.OK).json(attendanceDB);
};

module.exports = {
  getAttendanceList,
};
