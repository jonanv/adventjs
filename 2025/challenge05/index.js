/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
// Score: 8
function timeUntilTakeOff(fromTime, takeOffTime) {
    // All your code here
    
    function getTimeStamp(value) {
        let time = value
            .replaceAll('*', '/')
            .replaceAll('|', ':')
            .replaceAll('@', ' ')
            .split(' ');
        let ts = time[0].concat(' ', time[1]);
        
        const fechaObj = new Date(ts);
        const timestamp = fechaObj.getTime();
        return Math.floor(timestamp / 1000);
    }

    return getTimeStamp(takeOffTime) - getTimeStamp(fromTime);
}

module.exports = timeUntilTakeOff;