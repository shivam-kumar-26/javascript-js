// truthy value - means man lete hain ya assume krlete h - called truthy value
const userEmail = "Shivam.in"    // isi string me value ko assume krliya gya h true
if (userEmail){
    console.log("Got user Email");  // Got user Email
}else {
    console.log("Don't have user email");
}

//false
const UserName=""  // ye empty string - false assume
if(UserName){
    console.log("UserLoggedIn");
}else{
    console.log("Invalid User name");  //Invalid User name
}

const array = []   // true assume
if(array){
    console.log("array found");   //array found
}else{
    console.log("array not found");
}

/* Truthy or falsy value are as follows
Falsy value- false , 0 , - 0 , BigInt / 0n , "" , null , undefined , Nan  --> execpt ye sare truthy value h
 truthy value - (string ke andr kuch v likha hoga that is truthy value)
  "0" , 'false' , " "  , [] empty array , {} empty obj , function(){} - empty function */

  // Empty Array - [] - ko check krne ka real trika  - in truthy value
  const user = []
  if(user.length === 0){
    console.log("Array is empty");  //Array is empty
  }

  // Empty Object - {} - ko check krne ka real trika  - in truthy value
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){  // Object.keys() -> [] bn kr aajat h keys ka  - now treat as array
    console.log("Object is empty");   //Object is empty
}

/*knowledge - some more falsly value - 
console in browser
 false ==0   -- we get -- true
 false ==''   -- we get -- true
 0 ==''  -- we get -- true
 false == false -- we get -- true
 false == NaN  -- we get false
 false == null -- we get false
 false == undefined -- we get false
 false == 0n -- we get --true*/

