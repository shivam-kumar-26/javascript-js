//basic *************
/*console.log(2>1); true
console.log(2>=1); true
console.log(2<1); false
console.log(2==1); false
console.log(2!=1); true
*/


//comparision of two different data types ******************
 
 /*
console.log("2" > 1); //true -> reason automatically str converted to no and get result
console.log("02" > 1); //true

*/


// comparision of null *********************************
/*console.log(null > 0);  //false
console.log(null == 0); // false
console.log(null >= 0);  //true
console.log(null < 0);  //false
console.log(null <= 0);  //true

//note************ 
/* the reason is that an 
 equity check == 
 and comparisions > < >=  <= work differently.
 Comparisions convert null to a number , treating it as 0.
 Thtat's why (3) null >= 0 is true and (1) null > 0 is false and (5) null <= 0 is true
 */

 // comparision of undefined *********************************

/* console.log(undefined == 0) //false
 console.log(undefined >= 0)  // false
 console.log(undefined <= 0)  // false
 console.log(undefined > 0)  // false
 console.log(undefined < 0)  // false
 */


 //Strictly Check 
    //-> === ->  it check value as well as data type

/*console.log("2" == 1) // false
console.log("2" === 2); // false
console.log("2" == "2"); //true
console.log("2" === "2"); //true
*/



