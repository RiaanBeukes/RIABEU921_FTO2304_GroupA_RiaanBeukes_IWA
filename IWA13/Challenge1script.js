let state = 'idle';
let user = null;
let calculated = 1;

// Only allowed to change below

//missing ';'-- Changed '=' to '===' -- Changed ParseNumber to parseInt
//Added toString to change increment back to string.
//Changed 'numerical string' to 'string'.
const logCalc = () => { 
    const isString = typeof calculated === 'string';  
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated; 
    calculated = (calculatedAsNumber + 1).toString(); 
};

//
const calcUser = () => {
    logCalc(); // Call logCalc to increment calculated
    if (calculated > 2) user = 'John'; // Set user to 'John' when calculated is greater than 2
    if (calculated > 2) state = 'requesting'; // Set state to 'requesting' when calculated is greater than 2
    if (calculated > 3) state = 'idle'; // Set state to 'idle' when calculated is greater than 3
};

//Moved '=' to after checkUser
const checkUser = () => {
    if (user && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`);
    }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
