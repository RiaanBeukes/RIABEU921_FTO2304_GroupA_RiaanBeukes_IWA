const nickname= "Timmy";
const firstname = "Tomothy";

console.log(`Good Morning, ${nickname}` || ` ${firstname}!`);


/*The original console.log was enclosed in "" making it a string.
if (nickname) {
    console.log(`Good morning, ${nickname}!`);
/*For the string interpolation used a template literal to concatenate the string ${}.
  Template literals require backtics ` and not ".
*/
/*} else if (firstname) {
    console.log(`Good morning, ${firstname}!`);
/*If the first two conditions are not met we state 'else' and no variable assignment.*/
/*} else {
    console.log("Good morning!");
}*/