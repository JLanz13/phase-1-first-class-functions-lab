// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = drivers => {
    const firstTwoDrivers = [drivers[0],drivers[1]];
    return firstTwoDrivers
}

const returnLastTwoDrivers = drivers => {
    const lastTwoDrivers = [drivers[2], drivers[3]];
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fareMultiplier => {
    return ride => ride * fareMultiplier
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => func(drivers);