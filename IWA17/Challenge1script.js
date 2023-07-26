const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below 

const createArray = (length) => {
    const result = [];

    for (let i = 0; i < length; i++) {    // Fixed the loop initialization and condition
        result.push(i);
    }

    return result;
};

const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const result = [];

    for (const weekIndex of weeks) {
        const week = {
            week: weekIndex + 1,
            days: []
        };

        result.push(week);

        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;

            week.days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        }
    }

    return result;
};


const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing} <!-- Used the existing content -->
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

    return result;
};

const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) { // Corrected the destructuring of data object
        let inner = '';
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);

        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 0 for Sunday, 6 for Saturday
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell';

            if (isToday) classString = `${classString} table__cell_today`; // Added class for today's date
            if (isWeekend) classString = `${classString} table__cell_weekend`; // Added class for weekends
            if (isAlternate) classString = `${classString} table__cell_alternate`; // Added class for alternate weeks

            inner = addCell(inner, classString, value); // Updated the call to addCell()
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `;
    }

    return result;
};

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);