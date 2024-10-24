import { getData } from './accessDatabase.js';
let data = null;

//MAIN
export const backendMain = () => {
  const promise = getData();
  promise.then((input_data) => {
    data = input_data;

    let dateOrganized = new DateOrganized();
    console.log(dateOrganized);
    let memberOrganized = new MemberOrganized();
    console.log(memberOrganized);

    console.log(getTop5Attendees());
    console.log(getTop5Meetings());
  });
};

//GET ALL MEMBERS
export const getAllMembers = () => {
  const members = [];

  for (let i in data) {
    if (!members.includes(data[i][0])) {
      members.push(data[i][0]);
    }
  }
  return members;
};

//GET ALL DATES
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

class DateOrganized {
  constructor() {
    let allDates = getAllDates();
    this.dates = {};

    for (let date of allDates) {
      this.dates[date] = new Date(date);
    }
  }

  getDates(sortType = 'numerical', reversed = false) {
    output = this.dates.toSorted((date) => {
      if (sortType == 'numerical') {
        return date.date;
      }
      if (sortType == 'attendance') {
        return date.percentMembersAttended;
      }
      return 'Error: invalid type';
    });
    if (reversed) {
      output.reverse();
    }
    return output;
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
    this.date = date;
    this.presentMembers = getMembersPresent(date);
    this.absentMembers = getMembersAbsent(date);
    this.percentMembersAttended =
      this.presentMembers.length /
      (this.presentMembers.length + this.absentMembers.length);
  }
}
class Member {
  constructor(member) {
    this.member = member;
    this.datesPresent = getDatesAttended(member);
    this.datesAbsent = getDatesNotAttended(member);
    this.percentDatesAttended =
      this.datesPresent.length /
      (this.datesPresent.length + this.datesAbsent.length);
  }
}

//input: none
//output: the top 5 members who've attended the most meetings
export const getTop5Attendees = () => {
  let members = getAllMembers();
  members.sort((member1, member2) => {
    return getDatesAttended(member2).length - getDatesAttended(member1).length;
  });
  members = members.map((member) => {
    return new Member(member);
  });
  //members = members.slice(0, 5);
  return members;
};

//input: none
//output: the top 5 meetings that have been attended by the most members.
export const getTop5Meetings = () => {
  let dates = getAllDates();
  dates.sort((date1, date2) => {
    return getMembersPresent(date2).length - getMembersPresent(date1).length;
  });
  dates = dates.map((date) => {
    return new Date(date);
  });
  //dates = dates.slice(0, 5);
  return dates.slice(0, 5);
};

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
export const getMeetingsMebersAttended = () =>{
  let dates = getAllDates();
  let meetingData = {}
  for(let data in dates){
    meetingData[dates[data]] = [];
  }
  for(let i in data){
    let selectedData = data[i]
    console.log(selectedData)
    meetingData[selectedData[1]].push(selectedData[0])
  }
  return meetingData;
}
