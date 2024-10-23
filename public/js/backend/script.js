import {getData} from "./accessDatabase.js"

export const main = () => {
    const promise = getData();
    promise.then((data) => {
        //console.log(data)

        //console.log(numMembers('8/21/2024', data));
        //console.log(getDates(data))
        console.log(getNumMembersList(data))

    })
};

export const numMembers = (day, data) => {
    console.log(data[day])
}

export const datesAttended = (user) => {
  const times = [];
  const promise = getData();
  promise.then((data) => {
    for (let i in data) {
      let dataObject = data[i];
      if (dataObject[0] == user) {
        //0 is the email index
        times[times.length] = dataObject[1];
      }
    }
  });
  return times;
};