const data = ["one", "two", "three", "four", "five", "six", "seven"];

/* data.forEach((element, index, array) => {
  console.log(`The ${index}. element of the "${array}" array is: ${element} `);
}); */

// FOREACH - DO NOT HAVE RETURN VALUE ---> UNDEFINED
/* data.forEach((element) => {
  console.log(element);
}); */

/* const newData = [];
const result = data.forEach((element) => newData.push(`new${element}`));
console.log(newData); */

// MAP - ALWAYS HAS RETURN VALUE ---> ARRAY WITH SAME LENGTH AS ORIGINAL ARRAY
/* const result = data.map((element, index, array) => {
  console.log(`The ${index}. element of the "${array}" array is: ${element} `);
}); */

/* const result = data.map((element) => `new${element}`);

console.log(result);
 */

/* const result = data.filter((element) => element.length > 3);

console.log(result); */

/* const result = data.reduce((prev, curr) => prev + curr, "jeghidegmitiszol"); */

/* 
1.  prev: "jeghidegmitiszol"
    curr: "one"
    cb: prev + curr -> "jeghidegmitiszol" + "one" -> "jeghidegmitiszolone"

2.  prev: "jeghidegmitiszolone"
    curr: "two"
    cb: prev + curr -> "jeghidegmitiszolone" + "two" -> "jeghidegmitiszolonetwo"
 */

// console.log(result);

/* const result = data.reduce((prev, curr) => prev + curr);

console.log(result); */

/* 
1.  prev: "one"
    curr: "two"
    cb: prev + curr -> "one" + "two" -> "onetwo"
   
2.  prev: "onetwo"
    curr: "three"
    cb: prev + curr -> "onetwo" + "three" -> "onetwothree"
*/

const result = data.find((element) => element.length > 3);
console.log(result);
