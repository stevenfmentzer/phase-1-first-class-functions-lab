// Code your solution in this file!

const returnFirstTwoDrivers = (scuberDrivers) => {
    return [scuberDrivers[0], scuberDrivers[1]];
}

const returnLastTwoDrivers = (scuberDrivers) => {
    let x = scuberDrivers.length;
    return [scuberDrivers[x-2],scuberDrivers[x-1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return (fareValue) => { return (fareValue * multiplier)}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (scuberDrivers, drivers) => {
    if (drivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(scuberDrivers)
    } else if (drivers === returnLastTwoDrivers){
        return returnLastTwoDrivers(scuberDrivers)
    }
}