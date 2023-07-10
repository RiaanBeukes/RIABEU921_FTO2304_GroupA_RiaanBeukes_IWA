const nickname= "Timmy";
const firstname = "Timothy";

if (nickname) {
/*String interpolation: Used a template literal to concatenate the string ${}.
  Template literals require backtics ` and not ".
*/
    console.log(`Good morning, ${nickname}!`);
} else if (firstname) {
    console.log(`Good morning, ${firstname}!`);
} else {
/*This is a normal string and thus " is ok to use.*/
    console.log("Good morning!");
}