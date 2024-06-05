/*
//function - jo v hmne code likha h usko ek pacakage me bnd krdiya h 
  ar us package ki copy jb chahe jha chahe uski copy le jaskte hain*/

console.log("S");
console.log("H");
console.log("I");
console.log("V");
console.log("A");
console.log("M");
//ab aise baar baar likhne se bachne ke liye we use function
//syn - function varname (){log() ; log()}  //inside (params)  parameter
function sayMyName(params) {
console.log("S");
console.log("H");
console.log("I");
console.log("V");
console.log("A");
console.log("M");
}
//function ko call - to execute--> varname()    -- sayMyName- is Reference -- () -execution
sayMyName() /*S
              H
              I
              V
              A
              M*/
sayMyName   // nothing will print - kynki refrence de rha h ki wha ye function rhta h - execute ki baat nhi hui h 


function addTwoNumber1(numA,numB){
    numA + numB;
}
//callfunction
addTwoNumber1() // nothing done kynki number define nnhi h ar usko print v krana h ye v btana hoga

function addTwoNumber(num1,num2){
    console.log(num1 + num2);
}
//callfunction
addTwoNumber()          //NaN   - becz number knsa add krna h wo value diya nhi gya
//provide value
addTwoNumber("3" , 1)     //31
addTwoNumber(3 , "1")    //31
addTwoNumber( 3 , "a")   //3a
addTwoNumber( 3 , null)   //3
addTwoNumber(3 , 1)      //4
//note
/* function  addTwoNumber-varname (parameter)  {

}
//call function 
addTwoNumber(arguments) */

const result = addTwoNumber(3 , 1)      