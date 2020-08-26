// import tokenService from './tokenService';

export default {
    goalTrackerTimer,
};

// function to set interval or request animation every 24 hours - status updates
const dayInMS = () => 1000 * 60 * 60 * 24;

function goalTrackerTimer(sDate) {
    const startTime = new Date(sDate).toLocaleTimeString();
    setInterval(startTime, dayInMS);
}

// edate.getTime() - sDate.getTime() for number of days

// function updateStatus (daysLeft) {

// }