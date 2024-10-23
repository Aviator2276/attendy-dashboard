import {getData} from "./accessDatabase.js"


export const main = () => {
    const promise = getData();
    promise.then((data) => {
        console.log(data)

        for (let i in data) {
            console.log(data[i])
        }

    })
};
