//dataTypes -> 2 types -> 1)Primitive  2) Non Primitive(Refference data types)
//kis trike se data ko memory me rkha jata h ar access kiya jata h us basis pe two data types hain primitive and non primitive

/* ****Primitive******* -> it is CALL BY VALUE datatypes  means jb v aap inko khi se khi copy krte hain
for use to inka jo original data h memory ka wo nhi diya jata wo us memoey se copy krke diya jata h ar 
usme hm jo v changes krte hain wo copy me changes hote hain 

// 7 types -> String , Number , Boolean , null(empty) , undefined , Symbol , BigInt
*/
const score = 100          // number
const scoreValue = 100.3   //number

const isLoggedIn = false   //boolean
const outSideTemp= null  // null
let userEmail; //undefined

//symbol -> used for define uniqueness***************************
const id = Symbol('555')
const anotherId = Symbol('555') 
console.log(id===anotherId); // false // becz of symbol -> they make them unique
console.log(typeof id);   //symbol

const Id = ('555')
const anotherIdIs = ('555') 
console.log(Id===anotherIdIs); // true // becz no use of symbol
console.log();

//BigInt --> 129552233144n *************************
const bigNumber= 454545454545n
console.log(typeof bigNumber);  // bigint



 /*******Reference (Non primitive)-> ye sari values wo hain jinka reference memory me allocate kiya jaskta h
//types->  Array , Objects , Functions
*/

//Array ********************
const heros = ["BlackPanther" , "IronMan" , "AntMan"] 

//Object ******************* (curlyBraces{} ke andr jo v hain sb object hain 
                           //  -> jiske andr dataTypes kuch v hoskta  => String , Number , Boolean , ek dusra Object , function , array etc

//NOTE -> Array , Object , Function ka dataTypes -> Function hi hota h 

let myObject = {
    name:"Shivam",
    age: 22,
    emailId: "shivam@gmail.com",
    heros : ["IronMan" , "CaptianAmerica"],
}
console.log(myObject);


//Function  -> function(){}

const myFunction = function(){
    console.log("Hellow world")
}
console.log(myFunction) // [Function: myFunction]  //define**

//some more dataTypes
console.log(typeof myObject);  //object
console.log(typeof myFunction); // function (also knwn object function  or function object)









