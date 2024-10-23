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

export const datesAttended = (user,data) => {
    for(date in data){
        for(username in data){
            if (data[date][username] == user){
                
            }
        }
    }
}