//========================Cat===================================
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

    for (let i = 0; i < length; i++) { // Fixed the loop initialization and condition
        result.push(i);
    }

    return result;
};

const createData = () => { // Corrected the syntax of the function declaration
    const current = new Date();
    current.setDate(1); // Used setDate() instead of set()

    const startDay = current.getDay(); // Used getDay() to get the day of the week (0 for Sunday, 1 for Monday, etc.)
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);
    const days = createArray(35); // We'll create 5 weeks (35 days) to ensure all months fit in

    const result = [];

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: [],
        });

        for (const dayIndex of days) { // Used dayIndex instead of an empty loop variable
            const day = dayIndex - startDay + 1; // Adjusted the formula to calculate the day value
            const isValid = day > 0 && day <= daysInMonth;

            result[weekIndex].days.push({
                dayOfWeek: (dayIndex + 1) % 7, // Use modulus to get the day of the week (0 for Sunday, 1 for Monday, etc.)
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
