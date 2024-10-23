import {getData} from "./accessDatabase.js"

export const main = () => {
    const promise = getData();
    promise.then((data) => {
        console.log(data)

        console.log(numMembers('2012-04-23', data));

    })
};

export const numMembers = (day, data) => {
    console.log(data[day])
}