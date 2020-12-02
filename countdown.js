// Get all element
const htmlDay = document.querySelector('#day');
const htmlHour = document.querySelector('#hour');
const htmlMinute = document.querySelector('#minute');
const htmlSecond = document.querySelector('#second');


// Constant conversion any time format from milisecond
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

// Make sure the target date is same with client device's timezone
const offset = new Date().getTimezoneOffset();
let timezone = "GMT"

if( offset < 0 )
{
    // For GMT +
    timezone += `+${ offset / -60 }`
}
else if ( offset > 0 )
{
    // For GMT -
    timezone += `${ offset / -60 }`
}

/* 
    Make target date with client's timezone
    Change this for any time target
*/ 

const targetDate = new Date(`1 January 2021 00:00:00 ${timezone}`);

function formatDate(value)
{
    return value >= 10 ? value : `0${value}`;
}

// Function that count time difference
function differenceDate()
{
    const now = new Date();

    gap = targetDate - now;

    const dSecond = Math.floor( gap % MINUTE / SECOND );
    const dMinute = Math.floor( gap % HOUR / MINUTE );
    const dHour =Math.floor( gap % DAY / HOUR);
    const dDay = Math.floor( gap / DAY );

    // console.log(`second  ${dSecond}, minute ${dMinute}, hour ${dHour}, day ${dDay}`);

    htmlDay.innerHTML = formatDate(dDay);
    htmlHour.innerHTML = formatDate(dHour);
    htmlMinute.innerHTML = formatDate(dMinute);
    htmlSecond.innerHTML = formatDate(dSecond);
}

differenceDate();

// Running function differenceDate for every 1 second to update the date
setInterval(differenceDate, 1000)