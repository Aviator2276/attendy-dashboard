import { getData } from './accessDatabase.js';
let data = null;

//MAIN
export const backendMain = () => {
  const promise = getData();
  promise.then((input_data) => {
    data = input_data;

    //let dateOrganized = new DateOrganized();
    console.log(getDatesJSON());
    //let memberOrganized = new MemberOrganized();
    console.log(getMembersJSON());

    //console.log(getTop5Attendees());
    //console.log(getTop5Meetings());

    //console.log(getMeetingsMembersAttended());

    console.log(getDateChartData());
    console.log(getMemberChartData());
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

export const getDatesJSON = () => {
  let allDates = getAllDates();
  let dates = {};

  for (let date of allDates) {
    dates[date] = new Date(date);
  }
};

export const getMembersJSON = () => {
  let allMembers = getAllMembers();
  let members = {};
  for (let member of allMembers) {
    members[member] = new Member(member);
  }
  return members;
};

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
/*
export const getMeetingsMembersAttended = () => {
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
*/

export const getDateChartData = () => {
  let dates = getAllDates().map((date) => {
    return new Date(date);
  });
  let dateList = [];
  let presentList = [];
  let absentList = [];
  let percentAttendingList = [];

  for (let date of dates) {
    dateList.push(date.date);
    presentList.push(date.presentMembers.length);
    absentList.push(date.absentMembers.length);
    percentAttendingList.push(date.percentMembersAttended);
  }

  return {
    date: dateList,
    membersPresent: presentList,
    membersAbsent: absentList,
    percentMembersAttending: percentAttendingList,
  };
};

export const getMemberChartData = () => {
  let members = getAllMembers().map((member) => {
    return new Member(member);
  });
  let memberList = [];
  let datesPresentList = [];
  let datesAbsentList = [];
  let percentAttendedList = [];
  for (let member of members) {
    memberList.push(member.member);
    datesPresentList.push(member.datesPresent.length);
    datesAbsentList.push(member.datesAbsent.length);
    percentAttendedList.push(member.percentDatesAttended);
  }

  return {
    member: memberList,
    datesPresent: datesPresentList,
    datesAbsent: datesAbsentList,
    percentDatesAttended: percentAttendedList,
  };
};
