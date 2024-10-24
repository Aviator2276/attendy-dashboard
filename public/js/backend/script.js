import { getData } from './accessDatabase.js';
let data = null;

export const backendMain = () => {
  const promise = getData();
  promise.then((input_data) => {
    data = input_data;

    let dateOrganized = new DateOrganized();
    console.log(dateOrganized);
    let memberOrganized = new MemberOrganized();
    console.log(memberOrganized);
  });
};

//input: none
//output: list of all people
export const getAllMembers = () => {
  const members = [];

  for (let i in data) {
    if (!members.includes(data[i][0])) {
      members.push(data[i][0]);
    }
  }
  return members;
};

//input: none
//list of all dates
export const getAllDates = () => {
  const dates = [];

  for (let i in data) {
    if (!dates.includes(data[i][1])) {
      dates.push(data[i][1]);
    }
  }
  return dates;
};


//input: member
//output: list of dates attended by that member
export const getDatesAttended = (member) => {
  const dates = [];

  for (let i in data) {
    if (data[i][0] == member) {
      dates.push(data[i][1]);
    }
  }

  return dates;
};

//input: member
//output: list of all dates not attended by that member
export const getDatesNotAttended = (member) => {
  const datesAttended = getDatesAttended(member);
  const allDates = getAllDates();
  const datesNotAttended = [];
  for (let date of allDates) {
    if (!datesAttended.includes(date)) {
      datesNotAttended.push(date);
    }
  }
  return datesNotAttended;
};

//input: none
//output: the top 5 members who've attended the most meetings
export const getTop5Attendees = () => {
  const members = getAllMembers();
  members.sort(getNumAttendances);
  return members.slice(0, 5);
};

//input: none
//output: the top 5 meetings that have been attended by the most members.
export const getTop5Meetings = () => {
  const dates = getAllDates();
  dates.sort(getNumMembers);
  return dates.slice(0, 5);
};

//input: date
//output: percentage of members that attended
export const getPercentAttended = (date) => {
  const numMembersPresent = getMembersPresent(date).length
  const numAllMembers = getAllMembers(date).length
  return numMembersPresent / numAllMembers;
}

//input: date
//output: get a list of members that attended
export const getMembersPresent = (date) => {
  let members = [];
  for (let i in data) {
    if (data[i][1] == date) {
      members.push(data[i][0]);
    }
  }
  return members;
};

//input: date
//output: get a list of members that attended
export const getMembersAbsent = (member) => {
  const membersPresent = getMembersPresent(member);
  const allMembers = getAllMembers();
  const membersAbsent = [];
  for (let member of allMembers) {
    if (!membersPresent.includes(member)) {
      membersAbsent.push(member);
    }
  }
  return membersAbsent;
};

//input: none
//output: JSON.
//    keys = dates
//    values = # of members attended
export const getNumMembersObject = () => {
  let dates = getAllDates();
  let numMembersList = {};

  for (let date of dates) {
    numMembersList[date] = getNumMembers(date);
  }
  return numMembersList;
};

//input: none
//output: JSON
//    keys = members
//    values = # of meetings attended
//Get a dictionary-like object. keys = members, values = # of meetings attended
export const getNumAttendancesObject = () => {
  let members = getAllMembers();
  let numDatesList = {};

  for (let member of members) {
    numDatesList[member] = getNumAttendances(member);
  }
  return numDatesList;
};

/*
export const DateOrganized = () => {
  for (let date of getAllDates()) {
    let dateInfo = {};
    dateInfo["membersPresent"] = getMembers(date);
    dateInfo["membersAbsent"] = get

    orderedByDateJSON[date] = dateInfo;
  }
}*/

class DateOrganized {

  constructor() {
    let allDates = getAllDates();
    this.dates = {};

    for (let date of allDates) {
      this.dates[date] = new Date(date);
    }
  }
}

class MemberOrganized {
  constructor() {
    let allMembers = getAllMembers();
    this.members = {};
    for (let member of allMembers) {
      this.members[member] = new Member(member);
    }
  }
}

class Date {
  constructor(date) {
    console.log(date)
    this.presentMembers = getMembersPresent(date);
    this.absentMembers = getMembersAbsent(date);
    this.percentMembersAttended = this.presentMembers.length / (this.presentMembers.length + this.absentMembers.length);
  }
}
class Member {
  constructor(member) {
    console.log(member)
    this.datesPresent = getDatesAttended(member);
    this.datesAbsent = getDatesNotAttended(member);
    this.percentDatesAttended = this.datesPresent.length / (this.datesPresent.length + this.datesAbsent.length);
  }
}

/*
JSON formats

{

date: {
    list of members attended
    list of members not attended
    % of members who attended
}

]

[

user: {
    list of dates attended
    list of dates absent
    % of dates attended
}

}

top5attendees
top5dates
avg Dates attended per user
avg users per date
avg % of dates attended per user
avg % of users attending per date


*/