const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseFloat(tax[913]);
//--(1 - taxAsDecimal / 100);---1 represents the full amount of tax.
//--/100 --- to make decimal value e.g 12% is 0.0012.
const startingAfterTax = salary * (1 - taxAsDecimal / 100);
/* -removed value declaration 'lodging + size' as the declerations in the global scope misses ';'
    and will not assign the value.
 ---startingAfterTax added 
 ---rent[] --square brackets added to call up element 'large-apartment'. */
const balance = startingAfterTax - expenses.transport - expenses.food - rent['large-apartment'];
//Added toFixed(2)
console.log(balance.toFixed(2));
/*------------------------------Original code supplied---------------------------------------------
  -------------------------------------------------------------------------------------------------
const taxAsDecimal = tax.913 / 100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
console.log(balance)
  -------------------------------------------------------------------------------------------------

/*--------------------const taxAsDecimal = parseFloat(tax[913]);--------------------
By using square bracket notation, the code evaluates tax[913] as an expression.
 It retrieves the value stored in the tax object with the key 913. 
 In this specific case, it retrieves the string '12%' from the tax object.

-------------------------const taxAsDecimal = tax913 / 100;--------------------------
This code takes the value of the variable tax913 and divides it by 100. The resulting 
value is then assigned to the variable taxAsDecimal.

The purpose of this code is to convert a tax value from a percentage format (e.g., 9.13%) 
to a decimal format (e.g., 0.0913). By dividing the tax value by 100, you are moving the 
decimal point two places to the left, converting it from a percentage to a decimal 
number. However the example Ive put in parseFloat which replaces the need for dividing it by 100.

-----------------------why we say (1 - (taxAsDecimal / 100))-------------------------
For example, if the tax percentage is 12%, subtracting 0.0012 from 1 gives 0.9888,
which represents 98.88% of the salary remaining after tax deductions.

 ---------------startingAfterTax = salary * (1 - (taxAsDecimal / 100))----------------
To calculate the salary after tax deductions by multiplying the original salary (salary) by
the remaining portion or percentage after tax deductions. 
This gives the final amount of the salary after accounting for the applicable tax percentage.
*/