// scripts.js============================CAT VERSION========================================

const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
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
  
  // Only edit below this comment==============CAT VERSION===============================
  
  const createHtml = (athleteId) => {
    const athlete = data.response.data[athleteId];  //*? */
    const { firstName, surname, id, races } = athlete;
    const [lastRace] = races.slice(-1);  ////*? */
    const { date, time } = lastRace;   //reverse()?
  
    const fragment = document.createDocumentFragment();  //nc
  
const title = document.createElement('h2');      //nc xcpt 'h2'
title.textContent = id;                             //nc
section.appendChild(title);

    const list = document.createElement('dl');   //nc xcpt-'dl'
  
    const totalRaces = races.length;                   //added
    const day = new Date(date).getDate();             //const day = date.getDate();
    const month = MONTHS[new Date(date).getMonth()];  //const month = MONTHS[date.month];
    const year = new Date(date).getFullYear();        //const year = date.year;
                                                      /*first, second, third, fourth = timeAsArray;
                                                      total = first + second + third + fourth;*/
    const totalMinutes = time.reduce((acc, lap) => acc + lap, 0);  //added
    const hours = Math.floor(totalMinutes / 60);      //const hours = total / 60;
    const minutes = totalMinutes % 60;                //const minutes = total / hours / 60;
                                                      ///* html */ ` ???
    list.innerHTML = /* html */ `                
      <dt>Athlete</dt>                             
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${totalRaces}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
    `;
  
    section.appendChild(list);
  }
  
  const NM372Section = document.querySelector('[data-athlete="NM372"]');
  NM372Section.appendChild(createHtml("NM372"));
  
  const SV782Section = document.querySelector('[data-athlete="SV782"]');
  SV782Section.appendChild(createHtml("SV782"));
  