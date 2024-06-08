//logical operator

/* a - true , b true , c - false
&& -- and operator  
   -- a && b  - true 
   --a && c - false 
|| -- or operator 
   --a || b - true 
   --a || c - true 


//Nullish Coalescing Operator (??) - we see two keyword -  null undefined */
let  val1 ;
val1 = 5 ?? 10
console.log(val1);  // 5 - aaya iska mtlb ye nhi hr wqt 1st value assign hi ho 

val2 = null ?? 10 
console.log(val2); //10
//note jb value kisi data base se aati h to uspe hmara control nhi hota - 
//wo value null or undefined v hoskta h to us condition me we use nullish coalescing op so that we get the real value 
// becz null and undefined value can hamper our value, condition even our code

val3 = undefined ?? 108 ?? 50
console.log(val3);  // 108 -  not ignoring null and undefined - nullish coalsing - gives us 1st real value 



// TERNIARY operator ************************
// condition ? true: faslse 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("expensive") : console.log("Fair"); // expensive
iceTeaPrice <= 80 ? console.log("expensive") : console.log("Fair"); // fair

