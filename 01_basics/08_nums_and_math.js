// 1st way  to write number
const score = 100
console.log(score); // 100
//2nd way -> using new (keyword )-which tells about object )
 // in 2nd way we confirm get number becz of (new) keyword

 const balance = new Number(100)
 console.log(balance); // [Number: 100]
 //explore more on console for their prototype and on mdn 

 //protoTypes for Number
 console.log(balance.__proto__); // {}
 //number to string
console.log(balance.toString()); // 100 - dikh rha h no bt ye ab string type hogya h
            //for string we use string property 
              console.log(balance.toString().length); // 3

//toFixed(fixedupto) - 
console.log(balance.toFixed(2));100.00
console.log(balance.toFixed(5));100.00000

//toPrecision value(upto precise before decimal number // also after decimal) - 
//used for round off number and return type is string 
const newNumber =26.49
console.log(newNumber.toPrecision(2)); //26
const newnewNumber =26.5
console.log(newnewNumber.toPrecision(2)); //27
const numberOne = 5.49
console.log(numberOne.toPrecision(1));//5
const numberTwo = 5.5
console.log(numberTwo.toPrecision(1));//6
const numberThree =126.49
console.log(numberThree.toPrecision(3));//126 ..... and so on
//after decimal round off 
const numberFour =126.8966869
console.log(numberFour.toPrecision(4));//126.9
console.log(numberFour.toPrecision(5)); //126.90
console.log(numberFour.toPrecision(6)); // 126.897
console.log(numberFour.toPrecision(7)); //126.8967
console.log(numberFour.toPrecision(8)); //126.89669 ...so on
// also give result in exponential
console.log(numberThree.toPrecision(2));// 1.3e+2

//toLocalString() - used to insert commas betw no. - 1,000,000 // us standae=rd form
const hundNumber = 10000000
console.log(hundNumber.toLocaleString());//10,000,000
//also used in indian values - 1,00,000
console.log(hundNumber.toLocaleString('en-IN')) // 1,00,00,000

//explore Number -> DataType  on console
//Number ke sath attach propery v hoti h 
//on console
//Number
//Number.MAX_VALUE - in js this the maximum value - 1.7976931348623157e+308
//Number.MIN_VALUE - in js this the minimum value - 5e-324
//Number.MAX_SAFE_INTEGER - in js WE CAN STORE NUMBER UPTO -900719954740991
//Number.EPSILION
//Number.isFinite .... so on


// *************************** MATHS ******************************************
console.log(Math); // Object [Math] {} ->  Object type
//explore more of math on console - console.log(Math)

//function
//.abs(-) - absolute value  -> minus vale -> in posotive
console.log(Math.abs(-555)) // 555
//.round(4.49) => 4 - round off decimal number
console.log(Math.round(4.49)); //4
console.log(Math.round(4.5)); //5
//ceil -> round of upper no means - 4.2 -> 5 means 4 se thoda v jayda bda no. hua to 5
console.log(Math.ceil(4.01)); //5
//floor -> round of floor no. means after decimal no.










