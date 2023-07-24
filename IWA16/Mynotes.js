const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
const createHtml = (athleteId) => {
    const athlete = data.response.data[athleteId];
    const { firstName, surname, id, races } = athlete;
    const [lastRace] = races.slice(-1);  //*C* see below
    const { date, time } = lastRace;
  
    //const section = document.querySelector(`[data-athlete="${athleteId}"]`);
    const NM372Section = document.querySelector('[data-athlete="NM372"]');
    createHtml("NM372");

    const SV782Section = document.querySelector('[data-athlete="SV782"]');
    createHtml("SV782");

    const title = document.createElement('h2');
    title.textContent = id;
    section.appendChild(title);
  
    const list = document.createElement('dl');
  
    const totalRaces = races.length;
    const day = new Date(date).getDate();
    const month = MONTHS[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();
  
    //see *A* below.
    const [first, second, third, fourth] = time;
    const totalMinutes = first + second + third + fourth;
  
    //see *B* below.
    const hours = Math.floor(totalMinutes / 60); //Math.floor-round down to largest integer <= to the number.   
    const minutes = totalMinutes % 60;           //OG:'...=total/hours/60;'divides total by hours.
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${totalRaces}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>`;
  
    section.appendChild(list);
    return list;                   // To return the list element.
  }
  

/*A*--------------------------------------------------
   first, second, third, fourth = timeAsArray;
   total = first + second + third + fourth;
----------------------------------------------------
*Is an attempt to destructure the timeAsArray 
 (which should actually be time as per the provided data structure) into
 individual variables named first, second, third, and fourth. 
 !*The assumption here is that time is an array containing the lap times for a race.
*The mistake in the code is its trying to destructure into
 individual variables but lacks the correct syntax. In JavaScript, the destructuring
 assignment for arrays uses square brackets []. So, it should be written like this:
--------------------------------------------------------
   const [first, second, third, fourth] = time;
   const total = first + second + third + fourth;
--------------------------------------------------------
*This way, the array time will be destructured, and each element will be 
 assigned to the corresponding variables first, second, third, and fourth. 
*Then, the total time is calculated by summing up the individual lap times.
*But in the corrected version of the code provided earlier, the total
 time calculation is done correctly using the reduce method:
---------------------------------------------------------------------
   const totalMinutes = time.reduce((acc, lap) => acc + lap, 0);
---------------------------------------------------------------------
This calculates the total minutes by summing up all the lap times in the time array without the need for manual destructuring  
====================================================================================
*B*---------------------------------------------------------------
   const hours = Math.floor(totalMinutes / 60);
   const minutes = totalMinutes % 60;
---------------------------------------------------------------- 
*Calculates the hours and minutes from the totalMinutes. 
*The Math.floor function is used to obtain the integer part
 of the division, which gives the number of whole hours. 
*The % (modulus) operator then calculates the remaining minutes after 
 removing the hours.
====================================================================================
*C*
*The slice() method in JavaScript is usually used to extract a section of an 
 array and returns a new array containing the selected elements.
 --------------------------------------------------------------
   const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
   const citrus = fruits.slice(1, 3);
 --------------------------------------------------------------
*So it will select Orange, and Lemon. Ignoring the 3rd, Apple. Thats why:...
*Also the slice() method can be used on arrays to extract a portion
 of the array. The slice() method can take two arguments: start and end.
 If start is not specified, it will default to 0, and if end is not specified,
 it will default to the length of the array.
*When using a negative value for start, it means that you are counting 
 elements from the end of the array. Thus, -1 as the argument for start means
 you want to start counting from the last element of the array.
*/