const createHtml = (athleteId) => {
  const athlete = data.response.data[athleteId];
  const { firstName, surname, id, races } = athlete;
  const [lastRace] = races.slice(-1);
  const { date, time } = lastRace;

  const section = document.querySelector(`[data-athlete="${athleteId}"]`);

  const title = document.createElement('h2');
  title.textContent = id;
  section.appendChild(title);

  const list = document.createElement('dl');

  const totalRaces = races.length;
  const day = new Date(date).getDate();
  const month = MONTHS[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  const [first, second, third, fourth] = time;
  const totalMinutes = first + second + third + fourth;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

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
  return list;
};

createHtml("NM372");
createHtml("SV782");

/*const NM372Section = document.querySelector('[data-athlete="NM372"]');
createHtml("NM372");

const SV782Section = document.querySelector('[data-athlete="SV782"]');
createHtml("SV782");

createHtml("NM372");
    createHtml("SV782");*/
