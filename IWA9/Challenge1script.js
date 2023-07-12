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

/*--Use parseFloat instead of dividing with 100, square brackets calls up element '913'*/
const taxAsDecimal = parseFloat(tax[913]);
/*--(1 - taxAsDecimal / 100);---1 represents the full amount of tax.
/*--/100 --- to make decimal value e.g 12% is 0.0012. */
const startingAfterTax = salary * (1 - taxAsDecimal / 100);
/* -removed value declaration 'lodging + size' as the declerations in the global scope misses ';'
    and will not assign the value.
 ---startingAfterTax added 
 ---rent[] --square brackets added to call up element 'large-apartment'. */
const balance = startingAfterTax - expenses.transport - expenses.food - rent['large-apartment'];
/*Added toFixed(2) */
console.log(balance.toFixed(2));