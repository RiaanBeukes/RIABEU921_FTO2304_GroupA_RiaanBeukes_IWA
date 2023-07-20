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


console.log(holidays[futureId]?.name || `ID ${futureId} not created yet`);
//console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);


const christmasCopy = { ...holidays[christmas] };
christmasCopy.name = 'X-mas';
christmasCopy.date.setHours(0, 0, 0, 0);

const correctDate = new Date(christmasCopy.date);
const isEarlier = correctDate < holidays[christmas].date;

console.log('ID change: false');
console.log('Name change:', christmasCopy.name);
console.log('Date change:', `${correctDate.getDate().toString().padStart(2, '0')}/${(correctDate.getMonth() + 1).toString().padStart(2, '0')}/${correctDate.getFullYear()}`);

console.log('New date is earlier:', isEarlier);

if (isEarlier) {
  holidays[christmas] = christmasCopy;
}

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

/*Added .toString() :to display value as string.
        .padStart() :display 0 first if number under 10. 
        .const firstMonth :+1 to manage months: months counts from 0-11*/
const firstHolidayDate = new Date(firstHolidayTimestamp);
const firstDay = firstHolidayDate.getDate().toString().padStart(2, '0');
const firstMonth = (firstHolidayDate.getMonth() + 1).toString().padStart(2, '0');
const firstYear = firstHolidayDate.getFullYear();

const lastHolidayDate = new Date(lastHolidayTimestamp);
const lastDay = lastHolidayDate.getDate().toString().padStart(2, '0');
const lastMonth = (lastHolidayDate.getMonth() + 1).toString().padStart(2, '0');
const lastYear = lastHolidayDate.getFullYear();

console.log(`The first holiday in the year: ${firstDay}/${firstMonth}/${firstYear}`);
console.log(`The last holiday in the year: ${lastDay}/${lastMonth}/${lastYear}`);

const randomIndex = Math.floor(Math.random() * 9);
const randomHoliday = holidays[randomIndex];
const randomDay = randomHoliday.date.getDate().toString().padStart(2, '0');
const randomMonth = (randomHoliday.date.getMonth() + 1).toString().padStart(2, '0');
const randomYear = randomHoliday.date.getFullYear();

console.log(`Random holiday date: ${randomDay}/${randomMonth}/${randomYear}`);