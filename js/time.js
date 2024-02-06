// current year
const getThisYear = new Date();
// start year
const getStartYear = new Date(2019, 7 + 1, 1);
// calculate year
const yearCalc = getThisYear.getFullYear() - getStartYear.getFullYear();
// view in HTML about year
document.getElementById('years').textContent = `${yearCalc}`;

// view in HTML about timer
function autoUpdateTime() {
    const currentTime = new Date();
    document.querySelector('#currentTime').textContent = `${currentTime}`;
}
autoUpdateTime();
setInterval(autoUpdateTime, 1000);
