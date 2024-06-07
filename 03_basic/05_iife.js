/*IIFE - Immediately Invoked Function Expressions
used for - imidiate function ko execute krana h 
why we need to execute function immediately 
reason - specially jb hm ek file likthe hain jisme sirf data base connection h ar hm chahte hain ki jaise hi application start ho waise hi us file ke andr hmara data base ka connection start hojaye 
also kayi bar - Global scope jo h uske andr bahot sare variables declare hote hain ar kayi bar uske function ke andr hm kuch likh rhe ho ar nhi chahte ki us function ke andr us global scope ke variable kuch prblm kre kynki inner scope/ function ke liye global available h to jo hm function me declre kr rhe hote hain wo global scope se pollute/disturb hojata h 

so - 1st -to reduce or remove the pollution inside inner scope/ function  becz of global scope - to hm hmara alg ek scope bnalete hain kynki function me scope bn hi jata h 
ar 2nd - immidiate execute hojaye wahi pe*/


//imidiate connect of function
/*  comment out becz face prblm in 2nd execution - reason of prblm h ki iifi invoke to hogya lekin isko pta nhi h ki actually me contest rokna kha h 
so we use - ; - semicolon to stop/end that invoke*/
function Pizza() {
    console.log(`DataBase Connected`); 
}
//call function
Pizza();
//output - DataBase Connected



 
//use iifi - global scope ke pollution se prblm hoti h kayi bar to us global scope ke jo variable hai jo v declarae h variable - to us pollution ko htane kelie hm iifi ka use krte hain
//(function ki defination likhenge) (jha function ka execution) // parethesis lgane se ek block bn jata h uske andr v kam kiya ja skta h inm function
//note this is named iifi - means iifi ka name h - Pizz1
(function Pizz1(){

    console.log(`DB Connected`);
})(); //call and execution function -()  and ; - for stop/end - iifi that invoked

//this is simple iifi - kynki iska kuch nam nhi h 
// arrow function using iifi-()()
(()=>{
    console.log(`Db Connected Two`);
})();

/*now in function or in arrow function - if we want to give some variable
 - 1st give variable in consolelog `$(variable name)` 
 - 2nd give variable name - in parameter-(varname)
 - 3rd give expected value- in argument- jo ki call function execution me hota h - (write ur expected value which u want inside the var name) let see*/

 // this is simple iifi /unnamed iifi - becz name nhi h 
((name)=>{
    console.log(`DB Connect ${name}`);
 })("Shiv");  // DB Connect Shiv

 // two ar more iifi likhna h jaise upper 3 iifi likhe hain waise hi likhna hota h bs ; semicolon ka dhyan rkhna hota h 


