// Array
const myArray=[0,1,2,3,4,5]
console.log(typeof myArray);  // object
console.log(myArray);   //[ 0, 1, 2, 3, 4, 5 ]

//in arr - can contain - collection of multiple elements

//js array are resizeable

//and can contain mix of different data types - number , strings, boolean , arr, object 
const myArr = [0 , 1 , 2 , 3 , 4 , 5 , "Shivam" , true , ["Sonu", true], {age:23, emailId: "shivam@gmail.com"}]
console.log(myArr); //  
/*
[ 0,1,2,3,4,5,
    'Shivam',true,
    [ 'Sonu', true ],
    { age: 23, emailId: 'shivam@gmail.com' }] 
*/

//array accessed
//js arrays are not associaative arrays and so array elemrnts Can't be accessed using arbitary strings as index
//means - array accessed - console.log(myArr[index no]) - not as-> console.log(myArr["One,two"])
console.log(myArray[0]);  //0

//js array are zero-indexed // indexing-0

//js array-copy krne pe(array-copy-operations) create - //shallow copies bnata h
//shallow copies - //SAME REFERENCES POINT - jo v change mai krunga wo original array(data) me v change hoga jo hm provide krenge
//shallow copies - of an object is a copy whose properties share the SAME REFERENCES POINT(point to the same underlying values) as those of the source object from which the copy was made.
// as a result, when you copy change either the source or the copy, you may also cause the the other object to change too--and so

// shollow reverse - deep copies 
//deep copies - of an object is a copy whose properties DO NOT SAHRE THE SAME REFERENCE POINT

// . length access foe array also
console.log(myArr.length); //10 ->  6+2+1+1

/* 


*/
//2nd method to define array
const myArr2 = new Array(1 , 2 , 3 , 4 )  // new - object -{}  //console it for prototype

//protoTypes in Array - on console
console.log(myArr2.__proto__)
/*
[[Prototype]]
: 
Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
from: ƒ from()
fromAsync: ƒ fromAsync()
isArray: ƒ isArray()
length: 1
name: "Array"
of: ƒ of()
prototype: [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
Symbol(Symbol.species): ƒ Array()
Symbol(Symbol.species): ƒ Array()
arguments: (...)
caller: (...)
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[0]
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object

constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/

//array method
//.push() - to add some more element at last in array - resizeable
myArr2.push(6) //6 added as element in array at last
myArr2.push(8)
console.log(myArr2); //[ 1, 2, 3, 4, 6, 8 ]
//pop() - remove last element from array
myArr2.pop()
console.log(myArr2);  //[ 1, 2, 3, 4, 6 ]

//.unshift() - add element in array at start of the array //toDo list 
//problem in unshift - becz of adding of element in first - we have to shift all other element inside array / indexing 
// if we have data of 10k element - then it will be time consuming 
myArr2.unshift(5)
myArr2.unshift(9)
console.log(myArr2); //[0, 10, 1, 2, 3,  4, 6]

//.shift() - remove first element from array
myArr2.shift()
console.log(myArr2); //[ 10, 1, 2, 3,  4, 6]

//.includes(no.) - it will tell that the element (no.) is present or not
console.log(myArr2.includes(3)); //true
console.log(myArr2.includes(13)); //false

//.indexOf(5)
console.log(myArr2.indexOf(2)); // 2 
console.log(myArr2.indexOf(0)); // -1  //define**
console.log(myArr2.indexOf(9)); // -1  - means index 9 nhi h


//.join() - array to string
let myArrOne =[0, 2 , 5 , 8 , 9 ]
console.log(myArrOne);   //[ 0, 1, 2, 3, 5 ]
console.log(typeof myArrOne); //object //
console.log(myArrOne.join()) // 0,1,2,3,5
console.log(typeof myArrOne); //object  // since hmne new variable define nhi kiya to jo previous variable ka data type tha tha wahi show kr rha h

//assign - bindup with .join()
let newArray = myArrOne.join()
console.log(newArray); //0,1,2,3,5
console.log(typeof newArray); //string
/*
//slice -  Returns a copy of a section of an array. For both start and end, a negative index can be used 
to indicate an offset from the end of the array. For example, -2 refers to the second to last element
of the array., 
*/


console.log("A" , myArrOne);      // A [ 0, 2, 5, 8, 9 ]


const myn1 = myArrOne.slice(1,3) // index - 3 excluded
console.log(myn1);               //[ 2, 5 ]
console.log("B" , myArrOne);    //B [ 0, 2, 5, 8, 9 ]

/*
//splice -Removes elements from an array and, if necessary, inserts new elements in their place,
 returning the deleted elements.
 */
const myn2 = myArrOne.splice(1,3) // index - 3 included
console.log(myn2);                // [ 2, 5, 8 ]
console.log("C" , myArrOne);     // C [ 0, 9 ]

/*
//note - diff - slice and spice 
both prop. is uesd for array
1) slice - exclude last no. , spice - inclue last no.
2) slice - doesnot manipulate the orginal array , spice - it manipulate (change)the original array
*/










