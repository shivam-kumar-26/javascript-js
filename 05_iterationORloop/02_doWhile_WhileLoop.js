/*syntax
initialisation
condition check
while (condition) {
    print
    increament
}*/
let index = 0;
while(index<=10){
    console.log(`Value of index is ${index}`);
    index = index+2  // increamnet by 2
}
/*output
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10 */

//array by while loop
let myArray = ["batman" , "superman" , "ironman"]

let arr =0;
while(arr<myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}


//do while - condition check baad me phle kam hoga
/*syntax
initialization
do {
    print work
    increament
} while (condition);*/

let score = 0;
do{
    console.log(`value of score is: ${score}`);
    score = score+1
}while(score<=5)
/* output
value of score is: 0
value of score is: 1
value of score is: 2
value of score is: 3
value of score is: 4
value of score is: 5 */

// special case of do while - ek baar kam kraega hi hi kraega bina condition check kiye
let scoreUpdate =101  // initialization - 100 se h
do{
    console.log(`the score of team is: ${scoreUpdate}`);
    scoreUpdate= scoreUpdate +1
}while(scoreUpdate<=100) // means 100 tk print hoga
// output - the score of team is: 101  
