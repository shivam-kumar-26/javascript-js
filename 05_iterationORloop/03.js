// these are array specific loop
/*for of loop - basically hoga kya 
[ "" , "" , "" ] in arrray se string nikalna ho or
[{} , {} , {}] array se in object ko nikalna ho we use******* for of****/
 /*syntax
for (const iterator of object) {  // iterator of obj - mean - kis object(ye js ka Object nhi ye object mtlb - chiz/ thing h) pe iterate / loop -> variable lgana chahte ho
    
}
*/

const arr=[1,2,3,4,5]
for (const num of arr ){
    console.log(num);
}
//output - 1 2 3 4 5 

//for of in String
const greetings= "Hello World!"
for(const greet of greetings ){
    console.log(greet);   // h e l l o   W o r l d !
}


//Maps************************************* 
// map apne aap me hi ek Object h
//the Map object holds key-value pairs and remembers the original insertion order of the keys. means jis order me insert hua h us order ko yaad rkhta h
//Any value (both objects and primitive values) may be used as either a key or a value.
//menas - key ko - strins , number  jo man ho le skte hain
//map me koi v duplicate value nhi hoti 
// map me sari key unique milti h 
// map object are collection of key-value pair
//key in the map may only occur once
// note -jo Objects hote ho wo apne order of insert ko yaad nhi rkhat


const map = new Map()
map.set('In' , "India")   // In - key -- India value
map.set('USA' , "United State Of America")
map.set('Fr' , "France")
map.set('In' , "India")    // dublicate ya copy not allowed hmarA PRINT AS IT IS RHEGA unique in nature of map ke karn
console.log(map);
/* out put
Map(3) {
  'In' => 'India',
  'USA' => 'United State Of America',
  'Fr' => 'France'
}*/


//for off loop in map
for (const country of map){
    console.log(country);
}
/* output
[ 'In', 'India' ]
[ 'USA', 'United State Of America' ]
[ 'Fr', 'France' ] -- hmme aaary nhi chahiye tha // so we use shorcut method*/

// we use destructuring method
//[country , value ]  - here country is key
for (const [country , value] of map){
    // console.log(country); // for only key
    // console.log(value);   // for only value
    console.log(country, ':-' , value);
}
/* output key ****
In
USA
Fr
output vale ***
India
United State Of America
France
Output KEY and Value ****
In :- India
USA :- United State Of America
Fr :- France*/


// Object me For of loop lg skta h kya

/*const myObject = {
    'game1': "NFS",
    'game2': "spideman"
}

for (const [key , value] of myObject){
    console.log(key, value);
}

Note- Map itterateable h bt object yha pe nhi hua 
so object ko ireatable krane ke alg process hote hain
    */

