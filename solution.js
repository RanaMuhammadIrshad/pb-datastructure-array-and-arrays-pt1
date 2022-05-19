/* 1. Declare a variable named `myArray` and store an array that contains 5 elements. Print the array. */

let myArray = [1, 2, "Peter", [5, 6, 7], 20 - 3];
console.log(myArray);
/* 2. Access the 3rd element in the array and save that to another variable named `thirdElement`. Print the `thirdElement`.  */
let thirdElement = myArray[2];
console.log(thirdElement);
/* 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.  */
myArray[3] = "fourth element";
console.log(myArray);

/* 1. Declare a variable named `euroCities` and assign an array of 5 european cities to the variable e.g. `["Paris", "London", "Valletta", "Prague", "Rome"]`. Declare another variable `secondCity` and assign the second item of the array as a value. */
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
let secondCity = euroCities[1];
console.log(secondCity);

/* 2. Change the first item in the array to "Berlin". */

euroCities[0] = "Berlin";
console.log(euroCities);

/* 3. Print the length of the array `euroCities`. */
const lengthOfArr = euroCities.length;

console.log(lengthOfArr);

/* 4. Remove the last item of the array `euroCities`.  */

const remLast = euroCities.pop();
console.log(euroCities);
console.log(remLast);

/* 5. Use an array method to add "Budapest" to the end of the `euroCities` array. */

euroCities.push("Budapest");
console.log(euroCities);

/* 6. Create another variable named `asianCities` and assign an array of at least 5 cities to the variable. */

let asianCities = ["Karachi", "Mumbai", "Beijing", "Bangkok", "Tokyo"];

/* 7. Use a method to combine `euroCities` and `asianCities` into one array. Store the result in a variable `worldCities`.
 */

const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

/* 8. Reverse the order of `worldCities`. */
const revOrder = worldCities.reverse();
console.log(revOrder);

/* 9. **Bonus**: Remove the third item from the `euroCities` array.  */

let remThird = euroCities.splice(2, 1);
console.log(remThird);
console.log(euroCities);

/* 10. **Bonus**: Use an array method to select items 2 to 4 from the array of `asianCities` and store this in another variable.  */

const newArr = asianCities.slice(1, 4);
console.log(newArr);

/* 11. **Bonus**: Replace the 3rd item in the array of `worldCities` with "Toronto".  */

worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
/* 12. **Bonus**: Remove no elements from the array of `worldCities`, but insert "Washington" at the 2nd position. */

worldCities.splice(1, 0, "Washington");
console.log(worldCities);

/* 13. **Bonus** Write a program to join all elements of the result (`worldCities) into a string.  */

/* console.log(`worldCities = [${worldCities}]`);
console.log(`worldCities = ${worldCities}`);
console.log(`worldCities = ${worldCities.toString()}`); */
console.log(worldCities.join(" + "));

/* 1. Write a program to reverse the string: "Hello World".  */
console.clear();

let str = "Hello World";
let strToArray = str.split("");
strToArray.reverse();
let reversedStr = strToArray.join("");
console.log(reversedStr);

/*  function reverseString(str) {
    return str.split("").reverse().join("");
}
let storeVal = reverseString("Hello World");
console.log(storeVal);  */

/* let myString = ['Hello', 'World'];
let revString = myString.reverse();
let arrTOString = revString.toString()
console.log(arrTOString); 
 */

/* **Extra Practice**

Print the results to the console.

1. Make an array of your siblings' names or your favorite movie characters' names.
2. Make an array of your parents' names.
3. Combine these two arrays.
4. Add your pets' names.
5. Reverse the order of the array.
6. Access one of your parents' names.
7. Update the name of one of your parents. */

let siblingsArr = ["Amir", "Khalid", "Shahid", "Farooq", "Shahzad"];
console.log(siblingsArr);
let parentsArr = ["Rana Shams Ud Din", "Ghafoori Begum"];
console.log(parentsArr);
let combineArr = parentsArr.concat(siblingsArr);
console.log(combineArr);
combineArr.push("Cat");
console.log(combineArr);

console.log(combineArr.reverse());

let fatherName = combineArr[combineArr.length - 1];
console.log(fatherName);
console.log(combineArr);

let upFatherName = combineArr.splice(7, 1, "RANA SHAMS-UD DIN");
console.log(upFatherName);
console.log(combineArr);
