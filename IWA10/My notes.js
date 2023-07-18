const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//Added ternary '?:' operator to display `ID ${futureId} not created yet` if name is a falsy.
// 'Or'/'||' will give type error if name is falsy (undefined or empty string).
console.log(holidays[futureId] ?.name || `ID ${futureId} not created yet`);

copied = {...holidays[christmas]};
copied.name = 'X-mas Day'; //*OG*:copied={name:'X-mas Day'}*OG* modify the 'copied' object and not replace value.
console.log(copied);
const correctDate = new Date(copied.date); //added const
correctDate.setHours(0, 0, 0, 0);//setHours to get the day,hour,seconds,milliseconds
//*OG*const isEarlier = correctDate < holidays[xmas].date;*OG*
isEarlier = copied.date.getTime() < holidays[6].date.getTime(); //check that

console.log('New date is earlier:', isEarlier);
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[6].id !== copied.id || copied.id); //--using id key '6' to avoid value conflicts.
console.log('Name change:', holidays[6].name !== copied.name || copied.name);
console.log('Date change:', holidays[6].date !== copied.date || copied.date);

const firstHolidayTimestamp = Math.min(  //declare new holiday etc
    holidays[0].date,//.getTime(),
    holidays[1].date,//.getTime(),
    holidays[2].date,//.getTime(),
    holidays[3].date,//.getTime(),
    holidays[4].date,//.getTime(),
    holidays[5].date,//.getTime(),
    holidays[6].date,//.getTime(),
    holidays[7].date,//.getTime(),
    holidays[8].date,//.getTime()
);

const lastHolidayTimestamp = Math.max(
    holidays[0].date,//.getTime(),
    holidays[1].date,//.getTime(),
    holidays[2].date,//.getTime(),
    holidays[3].date,//.getTime(),
    holidays[4].date,//.getTime(),
    holidays[5].date,//.getTime(),
    holidays[6].date,//.getTime(),
    holidays[7].date,//.getTime(),
    holidays[8].date,//.getTime()
);
// Adding 1 to get month as 1-12 (January-December) -------Math.floor **
const firstDay = new Date(firstHolidayTimestamp).getDate().toString().padStart(2, '0');
const firstMonth = (new Date(firstHolidayTimestamp).getMonth() + 1).toString().padStart(2, '0');//+1 (month)
const lastDay = new Date(lastHolidayTimestamp).getDate().toString().padStart(2, '0');
const lastMonth = (new Date(lastHolidayTimestamp).getMonth() + 1).toString().padStart(2, '0');//+1 (month)
//const currentYear = new Date().getFullYear();
 
//--Added: Interpolation-to concatonate, toString() to make numerical value a string display,
//--Added: padStrart() to display '0' first.
console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);
          
//--length returns number of keys in 'holidays' object.
const randomHolidayIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomHolidayIndex];
console.log(randomHoliday.date);
/*  
const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)
*/