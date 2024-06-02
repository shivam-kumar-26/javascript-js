//the 1st way to declare the string
const  name="Shivam Kumar"
const repoCount= 100
//concatinate
console.log(name+" repoCount Value is " +repoCount); // Outdated Syntax


//Modern date Syntax we use string interpolation > ` `(backqote) ${}->(inject variable)-> inside str interpolation we use ` ` $
console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `)
// we can use it in under go way to know something extra
console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount} `)
console.log(`Hello my name is ${name.toLowerCase()} and my repoCount is ${repoCount} `)

//one more way to declare the string
const gameName = new String("Battle_Ground") // here new (keyword) is used for object in js
console.log(gameName);// [String: 'Battle_Ground'] //note here ->this [] is not array
//explore tthe 2nd method of string in console browser fo more
//while expolrinf we got index , length of String , ProtoTypes 

//index -> access key like 0 , 1 , 2 , 3 ....
console.log(gameName[2]); //t

//ProtoType Syntax to accrsse protoType
console.log(gameName.__proto__); // {} -> object

//access prototype -> length , atChar , toLowerCase etc 
// note all protoType are functions- (){}
console.log(gameName.length); //13 
console.log(gameName.toUpperCase()); //BATTLE_GROUND
console.log(gameName.toLowerCase()); //battle_ground
console.log(gameName.charAt(5)); //e
console.log(gameName.indexOf('e')); //5
//substring-> if we give  negative stating no. it automatically start with 0
console.log(gameName.substring(0,4)); // Batt -> index 0(start no) - B ........ index 3 - t  // exclude index 4 (end no)
//slice -> it take negative stating no. also
console.log(gameName.slice(0,4)); // Batt -> index 0(start no) - B ........ index 3 - t  // exclude index 4 (end no)
//trim -> remove extra space
const stringOne = "    Shivam    "
console.log(stringOne);             //    Shivam    //   
console.log(stringOne.trim());      //Shivam//
console.log(stringOne.trimEnd());   //    Shivam//
console.log(stringOne.trimStart()); //Shivam    //
//replace('srearch-value' , ('replace-value')) -> search and replace the search 
const url ="https://shivam.com/shivam%20kumar"
console.log(url);                      //https://shivam.com/shivam%20kumar
console.log( url.replace('%20' , '-')) // https://shivam.com/shivam-kumar
//includes(string..) - to find that us string me .... avialable h ki nhi
console.log(url.includes("shivam")); // true

//split(sperator '')(limit '') - to covert any string in array
console.log(gameName.split('-'));











