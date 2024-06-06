let a = 10
const b =20
var c = 30
console.log(a);  //10
console.log(b);  //20
console.log(c);  //30
/*jb hmara var kam kr rha tha to let ko lane ki kya jarurt thi
   yhi chiz scope me pta chlegi
//explore - scope -> {}
//note - object{} me  ye object declaration h
but {}- ye kisi function ke sath aata  h  ya kisi if-else ke sath aata h to isko bolte h scope
means- scope of that program ya us function ka scope , us if-else ka scope
*/

/*
if(true){
    let x = 40 // to ye yha se bahr aana nhi cahahiye yani  line 19 me nhi jana chahiye let see
}
console.log(x);  //ReferenceError: x is not defined - yani ye bahr nhi gya
*/

/*
if(true){
    const y = 60 // to ye yha se bahr aana nhi cahahiye yani  line 26 me nhi jana chahiye let see
}
console.log(y);  //ReferenceError: y is not defined - yani ye bahr nhi gya 
*/


if(true){
    var z = 40 // to ye yha se bahr aana nhi cahahiye yani  line  33 me nhi jana chahiye let see
}
console.log(z);  // 40 - bt ye bahr aagya // thats the problem of scope in var

//ab prblm smjo
 var e= 300  // kisi programmer ne var c define kiya giving some value
 if(true){
    var e=30 // ar yha if stattement me dediya value 30 to ye print nhi hona chahiye tha bt
 }
 console.log(e); //30 bt ye 30 print krwa diya
 //pareshani ye aayi ki progrmmer ne value 300 dala ar may be if function kisi ar file se import hua h to programmer ko pta nhi chl paega ki if function me var d ki value kuch ar h ar wo pareshan hoga ki maine value to kuch ar dala h ar ye kuch ar hi de rha h
 // as well as ek problm ar
var k = 300
 if(true){
    k = 40 // infact var k ho ya k inside the function to v ye prblm krta h 
}
console.log(k);  // k 40
// so avoid var and use let
// note inside if - jo v likh rhe hain that is block scope
// outside if - we write that is - GLOBAL Scope
// Global scope me jo v hm likhte hain wo value hmari available hoti h - scope ke andr 
// lekin scope ke andr jo value likhte hain wo scope ke bahr nhi jani chahiye

let G =300
if(true){
    let G = 30
    console.log("Inner_Scope" , G);   // Inner_Scope 30
}
console.log("Global-Scope", G); //Global-Scope 300

//Interview- in window- inspect - console - me jo GLOBAL scope check krenge/ core scope dekhenge - wo alg h
// ar code environment(vs code me) - node ke through example ko run krte hain to GLOBAL SCOPE alg hota h 
//Global scope ke value ko - Inner scope me use krskte hain bt inner scope ka value bahr nhi jana chahiye
/*
//Nested scope- Scope ke andr scope or function ke andr ek function -> to yha scope kis trh kam krte hain
//clousers kya hote hain - clouser ek bahot acchi techniqye h in js ar iske liye DOM aana jarurui h 
// DOM (DOCUMENT OBJECT MODEL) yani kaise HTML ke webpage ko Manipulate kiya jata h js ke through

*/
