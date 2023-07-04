const month = 'April';
const parent = 'December';
let date = 2050;
let currentStatus ='student';
let count = 0;

if (date === 2050) {
	console.log("January", "New Year\'s Day");
	console.log("March", 'Human Rights Day');
	console.log(month,'Family Day');
    console.log( month,'Freedom Day');
    count = count + 4;

	if (currentStatus === 'student') {
	  console.log('June', 'Youth Day');
	  count = count + 1;
  }

	console.log('August', 'Womens Day');
	console.log('September', 'Heritage Day');
	let parent = 'December';
	console.log(parent, 'Day of Reconciliation');
	count = count + 3;

	if ("currentStatus" === "parent") {
	  console.log(parent, 'Christmas Day');
	  count = count + 1;
  }

	console.log(parent, 'Day of Goodwill');
	count = count + 1;
};

console.log('Your status is:', currentStatus);
console.log('The year is:', date);
console.log('The total holidays is:', count);
