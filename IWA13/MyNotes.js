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


const calcUser = () => {
    logCalc(); // Call logCalc to increment calculated
    if (calculated > 2) user = 'John'; // Set user to 'John' when calculated is > 2.
    if (calculated > 2) state = 'requesting'; // Set state to 'requesting' when calculated is > 2.
    if (calculated > 3) state = 'idle'; // Set state to 'idle' when calculated is > 3.
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

/*
-----------------This is trial code below for later studies---------------
-------------------*currently not excecuting*-----------------------------
// Only allowed to change below

//missing ';'-- Changed '=' to '===' -- Changed ParseNumber to parseInt
//Added toString to change increment back to string.
//Changed 'numerical string' to 'string'.
const logCalc = () => { 
    const isString = typeof calculated === 'string';
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);
    calculated === (calculatedAsNumber + 1);
};
---------------//Consolidaded 'John' and 'requesting' under one condition.
---------------//Moved '=' after checkeUser
const calcUser = () => {
    logCalc ()
    if (calculated > 2 && user === null) {
        user = 'John';
        state = 'requesting';
    }
    if (calculated > 3) {
        state = 'idle';
    }
};
-----------Moved '=' after checkeUser------------------
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`);
	}
}
// Only allowed to change code above
*/
