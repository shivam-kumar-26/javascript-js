const accountId = 144589
let accountEmail= "shivam@gmail.com"
var accountPassword="5555"
accountCity="Pune"
let accountState; // UNDEFINED

// accountId=8585 // const  can't be change or not allowed
accountEmail="sonu@gmail.com"
accountPassword="50050"
accountCity="Gaya"
console.log([accountId, accountEmail, accountPassword, accountCity]);
console.table([accountId, accountEmail, accountPassword, accountCity , accountState]);

/* Prefer not to use var(variable) 
 because of issue in block scope and function scope
 */