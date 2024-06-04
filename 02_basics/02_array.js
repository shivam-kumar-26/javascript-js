const marvelHeros = ["Thor" , "IronMAn" , "SpiderMan"]
const DcHeros = ["SuperMan" , "Flash" , "Batman"]

/*
//push array in array
marvelHeros.push(DcHeros)
console.log(marvelHeros); //[ 'Thor', 'IronMAn', 'SpiderMan', [ 'SuperMan', 'Flash', 'Batman' ] ]
//to access any element in array
console.log(marvelHeros[3][1]); //Flash   //3 - index3 - [ 'SuperMan', 'Flash', 'Batman' ] & [1] -index 1 Flash
*/


//concat 
//- to merge both array - combines two or more arrays .This method return to new Array
console.log(marvelHeros.concat(DcHeros)); //[ 'Thor', 'IronMAn', 'SpiderMan', 'SuperMan', 'Flash', 'Batman' ]


//[...(variable name, ...variable name, ....and so on ]
//spred operator --> same as concat
const allHeros= [...marvelHeros , ...DcHeros]
console.log(allHeros);      //[ 'Thor', 'IronMAn', 'SpiderMan', 'SuperMan', 'Flash', 'Batman' ]


//.flat(number) //number upto which number of array u want in one single array  
//array ke andr array - convert all array in single array

const arrNumber = [1,0,2,3,[2,3,5],5,6,[5,5,5,[1,1,[1,1,1,[3,3,3]]]]]
console.log(arrNumber.flat(Infinity)); //[1, 0, 2, 3, 2, 3, 5,5, 6, 5, 5, 5, 1, 1,1, 1, 1, 3, 3, 3]

/*
//Array.isArray() //prototype - give true or false
//while using data Scraping -> kafi bar hm data select krte hain web page se to wo 
  data diff format me aata like String,, nodelist, object but hmme chahiye hota hai array
*/
 const newVar = Array.isArray("Shivam")
 console.log(newVar);  //falsr // becz it is String
//now connvert this in array
//Array.from()
console.log(Array.from("Shivam"));   //[ 'S', 'h', 'i', 'v', 'a', 'm' ]


//intresting
//for object to convert in array
console.log(Array.from({name:"Shivam" , age:23 , email:"shivam@gmail.com"}));  //[] - an empty array
// becz ye confuse hogya ki keys ka array bnau ya value ka array bnau ya dono ka bnau isiliyer empty aaray dediya 

//Array.of -return a new array from set of element
let score1=200
let score2 =400
let score3=800
console.log(Array.of(score1,score2,score3)); //[ 200, 400, 800 ]



