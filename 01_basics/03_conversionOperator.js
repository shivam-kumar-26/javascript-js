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

let isFollowOne = -85
let vlaueOfFollowOne= Boolean(isFollowOne) 
console.log(vlaueOfFollowOne);     // Note - except 0 , for all integer no we get boolean value true                         

let isEmpty =""
let valueOfEmpty = Boolean(isEmpty)
console.log(valueOfEmpty);              // false -< ""(empty) convert to false

let isNotEmpty =" "
let valueOfNotEmpty = Boolean(isNotEmpty)
console.log(valueOfNotEmpty);              // true -< " " convert to true

let isnotEmpty ="Shivam"
let valueOfnotEmpty = Boolean(isnotEmpty)
console.log(valueOfnotEmpty);              // true -< "Shivam"( convert to true

/**************************     OPERATIONS     *************************************** */

let value =3
let negvalue = -value
console.log(negvalue); // -3

/*
console.log(2+2);  4
console.log(2-2);  0
console.log(2*2);  4
console.log(2**3); 8
console.log(4/2);  2
console.log(2%2);  0

*/

let str1 ="hello"
let str2 = " Shivam"
let str3 = str1+str2
console.log(str3);  // hello Shivam

//some more deficulty for str and no
//guide dont use them while coding 

//console.log("1" + 3);   //13
//console.log(1 + "3");   //13
//console.log("1" + "3"); //13
//console.log("1" + 3 +1);  // 131  ***
//console.log(1 + 3 + "1"); //41
//console.log( (3+4) * 5 % 5 ); //0

//tricky
//console.log(+true); //1
//console.log(true + );  //error
//console.log(+"");  // 0
//console.log(+false); //0

let num1 , num2 , num3
num1 = num2 = num3 = 2+2;  // 4

//prefix
let gameCounter =100;
++gameCounter;
console.log(gameCounter); // 101

//postfix
let gameNewCounter =100;
gameNewCounter++;
console.log(gameNewCounter); // 101







