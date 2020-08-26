// import tokenService from './tokenService';

export default {
    goalTrackerTimer,
};

// function to set interval or request animation every 24 hours - status updates
const dayInMS = () => 1000 * 60 * 60 * 24;

function goalTrackerTimer(sDate) {
    const startTime = new Date(sDate).toLocaleDateString();
    setInterval(startTime, dayInMS);
}

// edate.getTime() - sDate.getTime() for number of days

// function updateStatus (daysLeft) {

// }

// need three args - date.now, sDate, eDate

// step one

// Math.ceil(end date - start date / dayinMS) -  total days

// step two - what day is it now, what proportion do we have left

// render a div filled to that proportion