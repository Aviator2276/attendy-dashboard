import {getData} from "./accessDatabase.js"


export const main = () => {
    const data = getData();
    console.log(data)
};
