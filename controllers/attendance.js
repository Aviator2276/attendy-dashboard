const { StatusCodes } = require('http-status-codes');
const csv = require('csv-parser');
const needle = require('needle');
const urlData =
  'https://docs.google.com/spreadsheets/d/17bVQrYdBmNAH0in2mje04Gm61WxEfq26JoAiRIB6Orw/gviz/tq?tqx=out:csv&sheet=data';
const attendanceDB = require('../db/attendance.json');

const getAttendanceList = async (req, res) => {
  const dataRequest = new Promise((resolve, reject) => {
    const attendanceData = [];
    needle
      .get(urlData)
      .pipe(csv({ headers: false }))
      .on('data', (data) => {
        attendanceData.push(data);
      })
      .on('done', (err) => {
        if (err) reject(new Error('Unable to retrieve data.'));
        else resolve(attendanceData);
      })
      .on('end', function () {
        console.log('Online Database Success.');
      });
  });

  try {
    dataRequest.then((data) => {
      console.log(data);
      res.status(StatusCodes.OK).json(data);
    });
  } catch (error) {
    console.error('Unable to retrieve data.');
  }
};

module.exports = {
  getAttendanceList,
};
