// two way to declare object- 1)Literals  2)Constructor

//singleton -> kv v constructor use krke object bnate hain to singleton bnta h
//jb literals ka use krke object bnta h to singleton nhi hota


//way to make obj
//1)Object.create // constructor method to make obj // singleton
//object literals 
//2)const JsUser = {} //{}-object  //object literals

// note insinde array we cant define key , only we can define value 
//note inside the object key is in " "- string type (by default) - like name is string type and so on

const JsUser ={
    name:"Shivam",      // note - name - key |  shivam is value
    age:23,            //        age - key |  23 is value
    email:"shivam@google.com" , // email - key |  shiv...@gma..c. is value
    isLoggedIn: true,                 // isLoggedIn- key |  true is value
    isLastLoggedIn: ["Monday" ,"Thrusday" ],
    "Full Name" : "Shivam Kumar"

}
//access object - variablename.key Name
console.log(JsUser.email);   //shivam@google.com
//another way to access obj
// ["key name"]  - key is in " "- string type (by default) so we use " "
console.log(JsUser["email"]);   //shivam@google.com
console.log(JsUser["name","age" , "email", "isLoggedIn"]);// true - sirf last wala lega not all 
console.log(JsUser["Full Name"]);  //Shivam Kumar

//use symbol inside object
//interview que
//ek symbol lo usko object me as a key declare kro ar usko print krke dikha do

//symbol liya
let mySym = Symbol("key")
//obj
const newUser={
    [mySym]:"key1"
}
console.log(newUser[mySym]);  //key1
console.log(newUser);  //{ [Symbol(key)]: 'key1' }


//change the value of an object
let mySym1 = Symbol("key1111")
const newUser1={
    name:"Shivam",     
    age:23,           
    email:"shivam@google.com" ,
    isLoggedIn: true,                 
    isLastLoggedIn: ["Monday" ,"Thrusday" ],
    "Full Name" : "Shivam Kumar",
    [mySym1]:"key1000"
}
newUser1.email ="sonu@google.com"
console.log(newUser1.email);   //sonu@google.com
//if we want ki koi v kisi object ke value ko change na krske 
//Object.freeze(varnname of object)
Object.freeze(newUser1)
//do change to see - no change occur
newUser1.email="sssihohgjvfj@gmai.bkbbu"
console.log(newUser1);     
/*output
{
    name: 'Shivam',
    age: 23,
    email: 'sonu@google.com',
    isLoggedIn: true,
    isLastLoggedIn: [ 'Monday', 'Thrusday' ],
    'Full Name': 'Shivam Kumar',
    [Symbol(key1111)]: 'key1000'
}
*/

//function in object - treated as - koi discrimination nhi hota usko variable ki type trat krskte hain
//insert function in obj
newUser.greeting= function(){
    console.log("Hello User");
}




