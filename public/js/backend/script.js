import { getData } from './accessDatabase.js';
let data = null;

export const main = () => {
  const promise = getData();
  promise.then((input_data) => {
    data = input_data;
    //console.log(data)

    //console.log(numMembers('8/21/2024', data));
    //console.log(getDates(data))
    //console.log(getDates())
    console.log(data)
    console.log(getNumMembersList());
    console.log(datesAttended('ahneilson08@jeffcityschools.org'));
  });
};

export const numMembers = (date) => {
  let count = 0;
  for (let i in data) {
    if (data[i][1] == date) {
      count++;
    }
  }
  return count;
};

export const getDates = () => {
  const dates = [];

  for (let i in data) {
    if (!dates.includes(data[i][1])) {
      dates.push(data[i][1]);
    }
  }
  return dates;
};

export const getNumMembersList = () => {
  let dates = getDates();
  let numMembersList = {};

  for (let date of dates) {
    numMembersList[date] = numMembers(date);
  }
  return numMembersList;
};

export const datesAttended = (user) => {
  const times = [];

  for (let i in data) {
    let dataObject = data[i];
    if (dataObject[0] == user) {
      times.push(dataObject[1]);
    }
  }

  return times;
};
