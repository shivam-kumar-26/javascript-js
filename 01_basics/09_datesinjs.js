//Dates
let myDate = new Date()  //date dataType is - Object
console.log(myDate); //2024-06-03T13:13:53.569Z - non readable
//to make readabilility clear we use more function()  //function(){}
//Function are --
//.toString()  -> day and date
console.log(myDate.toString()); //Mon Jun 03 2024 13:14:39 GMT+0000 (Coordinated Universal Time)
//.toDateString() -> day and date 
console.log(myDate.toDateString());//Mon Jun 03 2024
//.toISOSString() - date and time in 24 hr
console.log(myDate.toISOString()); //2024-06-03T13:20:49.743Z
//.toJSON() // date and time in 24 hr
console.log(myDate.toJSON());//2024-06-03T13:20:49.743Z
//.toLocaleDateString() - date 
console.log(myDate.toLocaleDateString()); //6/3/2024
//.toLocaleString() -> date and time in 12 hr
console.log(myDate.toLocaleString()); //6/3/2024, 1:20:49 PM
//.toLocaleTimeString() -> time in 12 hr
console.log(myDate.toLocaleTimeString()); //1:20:49 PM

//some special format of date as per wish // mm/dd/yyyy
let mySpecificDate = new Date(2024 , 0 , 24)  // 0-> jan
console.log(mySpecificDate); // 2024-01-24T00:00:00.000Z // 0 -> jan
console.log(mySpecificDate.toDateString()); // Wed Jan 24 2024
let myCreateDate = new Date(2024 , 0 , 24 , 5 , 30)  // 0-> jan
console.log(myCreateDate); //2024-01-24T05:30:00.000Z
console.log(myCreateDate.toLocaleString()); //  1/24/2024, 5:30:00 AM
//in india most preferred date syn
let myCreateDateOne = new Date("01-26-2024")  // 01-> jan // while two digit
console.log(myCreateDateOne);
console.log(myCreateDateOne.toLocaleString());  //1/24/2024, 12:00:00 AM


//myTimeStamp -> use for quizes , hotel booking , poll to declare the fastest -winner 
 // NOTE-> myTimeStamp is already defined variable in js
let myTimeStamp =Date.now()  // Date.now() - av tk ke date/time since 1 jan 1970
console.log(myTimeStamp);  // 1717441228370 -> this is milisecond -> ye milisecond h  from 1 jan 1970 to till now

// ab milisecond nikalna jb v hota h to 
let myTimeIs = new Date("01-26-2024")
console.log(myTimeIs); //2024-01-26T00:00:00.000Z
//.getTime() -  now to calc the milisecond till the date ("01-26-2024") -> since 1 jan 1970
console.log(myTimeIs.getTime()); //1706227200000
// now we have two value  in milisecond -> 1) 1717441228370  2) 1706227200000 -> compare these two  to find the winner , hotel booking etc

//convert milisecond in second
console.log(Date.now()); //1717442024325  - milisecond
console.log(Date.now()/1000); //1717442062.333 -> second // but remove the decimal
console.log(Math.floor(Date.now()/1000)); //1717442111 -> second

//more mrthod for date
let newDate = new Date()
console.log(newDate); //2024-06-03T19:18:19.365Z
//to find month
console.log(newDate.getDate()); //3
console.log(newDate.getDay()); // 1 - monday
console.log(newDate.getMonth()); // 5 - (index5) -> june 
//for getting exact month not in index
console.log(newDate.getMonth() + 1); //6 - june
console.log(newDate.getFullYear()); //2024

// while coding for date with string we use string interpolation
console.log(`${newDate.getDay()} and the month ${newDate.getMonth()} is today`)

//.toLocaleString('........') - in internationalization format -> more uses
// "default" , {}-obj  - inside object{ctrl+space} more option    //Note -> ctrl+space -> for suggestion
//since date is an object so we can use object format
newDate.toLocaleString("default" , {
    weekday:"long",
})
console.log(newDate.toLocaleString("default" , {
    weekday:"long",
    minute:"numeric",
    second:"numeric",
}));


 