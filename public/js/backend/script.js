import { getData } from './accessDatabase.js';
let data = null;

export const backendMain = () => {
  const promise = getData();
  promise.then((input_data) => {
    data = input_data;

    console.log(data);
    console.log("getAllMembers")
    console.log(getAllMembers());
    console.log('getAllDates');
    console.log(getAllDates());
    console.log('getDatesAttended');
    console.log(getDatesAttended('cvang07@jeffcityschools.org'));
    console.log('getDatesNotAttended');
    console.log(getDatesNotAttended('cvang07@jeffcityschools.org'));
    console.log('getTop5Attendees');
    console.log(getTop5Attendees());
    console.log('getTop5Meetings');
    console.log(getTop5Meetings())
    console.log('getNumMembersObject');
    console.log(getNumMembersObject());
    console.log('getNumAttendancesObject');
    console.log(getNumAttendancesObject());
    console.log('getNumAttendances');
    console.log(getNumAttendances('cvang07@jeffcityschools.org'));
  });
};

//get all people
export const getAllMembers = () => {
  const members = [];

  for (let i in data) {
    if (!members.includes(data[i][0])) {
      members.push(data[i][0]);
    }
  }
  return members;
};

//get all dates
export const getAllDates = () => {
  const dates = [];

  for (let i in data) {
    if (!dates.includes(data[i][1])) {
      dates.push(data[i][1]);
    }
  }
  return dates;
};

//return date with # people attended & # not attended JSON format

//get all dates of a certain person attended
export const getDatesAttended = (user) => {
  const dates = [];

  for (let i in data) {
    if (data[i][0] == user) {
      dates.push(data[i][1]);
    }
  }

  return dates;
};

//get all dates of a certain person not attended
export const getDatesNotAttended = (user) => {
  const datesAttended = getDatesAttended(user);
  const allDates = getAllDates();
  const datesNotAttended = [];
  for (let date of allDates) {
    if (!datesAttended.includes(date)) {
      datesNotAttended.push(date);
    }
  }
  return datesNotAttended;
};

//get top 5 attendees
export const getTop5Attendees = () => {
  const members = getAllMembers();
  members.sort(getNumAttendances);
  return members.slice(0, 5);
};

//get top 5 dates attended
export const getTop5Meetings = () => {
  const dates = getAllDates();
  dates.sort(getNumMembers);
  return dates.slice(0, 5);
};

//return date with % of people attended JSON format

//get percent attended
export const getPercentAttended = (date) => {
  const numMembers = getNumMembers()
  const get
}

//get average attendence


//---------------------------------------------

//get members from a specific date
export const getMembers = (date) => {
  let members = [];
  for (let i in data) {
    if (data[i][1] == date) {
      members.push(data[i][0]);
    }
  }
  return members;
};


//get the number of members that attended a meeting
export const getNumMembers = (date) => {
  let count = 0;
  for (let i in data) {
    if (data[i][1] == date) {
      count++;
    }
  }
  return count;
};

//Get the number of times a member attended.
export const getNumAttendances = (member) => {
  let count = 0;
  for (let i in member) {
    if (data[i][0] == member) {
      count++;
    }
  }
  return count;
};

//Get a dictionary-like object. keys = dates, values = # of members attended
export const getNumMembersObject = () => {
  let dates = getAllDates();
  let numMembersList = {};

  for (let date of dates) {
    numMembersList[date] = getNumMembers(date);
  }
  return numMembersList;
};

//Get a dictionary-like object. keys = members, values = # of meetings attended
export const getNumAttendancesObject = () => {
  let members = getAllMembers();
  let numDatesList = {};

  for (let member of members) {
    numDatesList[member] = getNumAttendances(member);
  }
  return numDatesList;
};
