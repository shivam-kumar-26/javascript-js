//Switch case used for - ek value h usko multiple condition se checking krna h and execute the program 
/* Syntax--- 
switch (key) {    // key h jiske liye value check krna h like month - then 1sr define variable name month
    case value:   // value - for month keliye - 1 - 12 tk me hoga  - let agr 1 h to 
                  // to print - "jan"
        break;    // braek is used for- agr koi case match hogya to loop se bahr nikalne ka kam krta h
                      agr break nhi hua ar condition(case) match hogya h to - uske baad ka sara code v execute hoga

    default:       // just like else - jo if - else me hota h ki koi v case match nhi hoga to to ye default chelga
        break;
}
        */

// using number in switch case
const month = 8
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 8:
        console.log("august");  //"august"
        break;
    case 12:
        console.log("december");
        // break;

    default:
        console.log("march month not found");    // it will only run if all upper case doesnot run 
        break;
}

/*interview - break used for - means- contol flow ko break krta h 
 break keyword use na kre - then jo case/ condition match hua h to 
uske baad ka sara case v execute hojaega  -
also - default - default ko v print  kraega 
so we need break; to stop matching the condition */

// uing string in switch case
const month1 = "Aug"
switch(month1){
    case "Jan":
        console.log("not found");
        break;
    case "feb":
        console.log("Not found");
        break;
    case "Aug":
        console.log("Month is August");  // month is august
        break;
    case "sep":
        console.log("Month is spt"); 
        break;
    default:
        console.log("month");
        // break;
}