//Dates
let myDate = new Date()  //date dataType is - Object
console.log(myDate); //2024-06-03T13:13:53.569Z - non readable
//to make readabilility clear we use more function()  //function(){}
//Function are --
//.toString()
console.log(myDate.toString()); //Mon Jun 03 2024 13:14:39 GMT+0000 (Coordinated Universal Time)
//.toDateString()
console.log(myDate.toDateString());//Mon Jun 03 2024
//.toISOSString()
console.log(myDate.toISOString()); //2024-06-03T13:20:49.743Z
//.toJSON()
console.log(myDate.toJSON());//2024-06-03T13:20:49.743Z
//.toLocaleDateString()
console.log(myDate.toLocaleDateString()); //6/3/2024
//.toLocaleString()
console.log(myDate.toLocaleString()); //6/3/2024, 1:20:49 PM
//.toLocaleTimeString()
console.log(myDate.toLocaleTimeString()); //1:20:49 PM
