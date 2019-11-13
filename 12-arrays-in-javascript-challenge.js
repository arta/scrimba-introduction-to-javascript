let example1 = ['Dylan', 5, true];
console.log(example1);

let example12 = example1;
example12.push(2);
console.log(example12);
/* example12 is not a new array; it simply references example1 */


let example13 = [...example1];
example13.push(3);
console.log(example13); /* contains 2; example12 simply references example1 */
/* example13 is a new array */


let example14 = example1.map(element => {
   return element; 
});
example14.push(4);
console.log(example14); /* contains 2, not 3; example13 is a new array */
/* example14 is a new array */


let example15 = example1.map(element => {
   return element;
});
example15.push(5);
console.log(example15); /* contains 2, not 3 nor 4; example14 is a new array */
