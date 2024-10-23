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

export const numMembers = (data, date) => {
    let count = 0
    for (let i in data) {
        console.log(date);
        console.log(data[i][1])
        if (data[i][1] == date) {
            count++;
        }
    }
    return count;
}

export const getDates = (data) => {
    const dates = [];
    
    for (let i in data) {
        if (!dates.includes(data[i][1])) {
            dates.push(data[i][1]);
        }
    }
    return dates
}

export const getNumMembersList = (data) => {
    let dates = getDates(data)
    let numMembersList = {};

    for (let date of dates) {
        numMembersList[date] = numMembers(data, date);
    }
    return numMembersList;
}