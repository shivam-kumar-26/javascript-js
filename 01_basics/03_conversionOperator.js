let score = 55
let scored ="55"
let newScore = "55abc"
let temp = null
let state = undefined
let isLoggedIn = true
let name = "Shivam"


//typeof above variable
console.log(typeof score);  // number // 1st method
console.log(typeof(score)); // number // 2 method
console.log(typeof(scored)); // string



//conversion in String****************************************
let valueInString=String(score)
console.log(valueInString);  // ans-> 55  // after conversion type changed but variable as
console.log(typeof valueInString); //string


// conversion  in Number  *************************************
let valueInNumber = Number(scored) 
console.log(valueInNumber);         // 55
console.log(typeof valueInNumber);  // number


let valueInNumberNew=Number(newScore)
console.log(valueInNumberNew);       // NaN(Not a Number) -> while checking 
console.log(typeof valueInNumberNew); // Number


let valueInTemp = Number(temp)
console.log(valueInTemp);            // 0  -< in Null conversio 
console.log(typeof valueInTemp);     // Number


let valueOfstate = Number(state)
console.log(valueOfstate);         // NaN -< in undefined conversion
console.log(typeof valueOfstate);  // Number


let valueOfLoggedIn = Number(isLoggedIn)
console.log(valueOfLoggedIn);          // 1 =< in true conversion // 0 -< in false conversion
console.log(typeof valueOfLoggedIn)    //number


let valueOfName = Number(name)
console.log(valueOfName);         // NaN -< in string  conversion in number // Not possible
console.log(typeof valueOfName);  // number // conversion hua nhi bt process to convert -> is typeof => number


//brief
//*****  number ***************
// "55" =>conversion=> 33
// "55abc" =>conversion=> NaN
// true =>conversion=> 1
// false=>conversion=> 0

//****   Boolean   ***** */
// ""=>conversion=> False
// " "=>conversion=> True
// "Shivam"=>conversion=> True


//conversion in Boolean**********************************************

let isFollow = 1
let vlaueOfFollow = Boolean(isFollow) 
console.log(vlaueOfFollow);             // true -< 1 convert to true in boolean
                                        // false -< 0 .....................


let isEmpty =""
let valueOfEmpty = Boolean(isEmpty)
console.log(valueOfEmpty);              // false -< ""(empty) convert to false

let isNotEmpty =" "
let valueOfNotEmpty = Boolean(isNotEmpty)
console.log(valueOfNotEmpty);              // true -< " " convert to true

let isnotEmpty ="Shivam"
let valueOfnotEmpty = Boolean(isnotEmpty)
console.log(valueOfnotEmpty);              // true -< "Shivam"( convert to true


