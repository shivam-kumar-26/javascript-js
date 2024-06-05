//singleton object using costructor

//singleton
const tinderUser = new Object()
console.log(tinderUser);        //{} - empty object


//non singleton / literals
const tinderuser1 = {}
console.log(tinderuser1);       //{} - empty object

//insert key  and value in object
tinderuser1.id="123abc"
tinderuser1.name="Sankky"
tinderuser1.isLoggedIn= false
console.log(tinderuser1);   //{ id: '123abc', name: 'Sankky', isLoggedIn: false }



//object ke andr object

const regularUser ={
    email:"sannky@gmail.com",
    fullname: {
        username:{
            firstname: "sankky",
            lastname: "saxena"
        }
    }
}
//access the object
console.log(regularUser.fullname); //{ username: { firstname: 'sankky', lastname: 'saxena' } }
console.log(regularUser.fullname.username.firstname); //sankky

//merge / combine object
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj3 ={5:"e", 6:"f"}
const objResult= {obj1,obj2, obj3}
console.log(objResult);   //{obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' },obj3: { '5': 'e', '6': 'f' }}

//merge
//Object.assign - copy the value of all the enumerable oen propperties from one ormore source object to a target object. Return the terget object
const objnewResult= Object.assign(obj1,obj2,obj3) //here obj1 is target , and remain all are source
console.log(objnewResult);   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//or - for same result 
const objnewResult1= Object.assign({},obj1,obj2,obj3)  //here {}-obj is target and remain obj1,obj2 .. - are source
console.log(objnewResult1);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//or - for same result
//{...variable name, ...variable name, ... so on} -spread operator
const objnewResult2 ={...obj1, ...obj2, ...obj3}
console.log(objnewResult2);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



//data base se values aaegi - aati h array of object me  aaega - means array ke andr bahot sara object rhega 

//data aata h like
const User = [
    {
        id:1,
        email:"shiv@gmail.com"
    },
    {
        id:2,
        email:"sonu@gmail.com"
    },
    {
        id:3,
        email:"raj@gmail.com"
    },
    {
        
    },
    {

    }
]
//access them
console.log(User[1].email); //sonu@gmail.com
console.log(User[0].email); //shiv@gmail.com
console.log(User[2].email); //raj@gmail.com


console.log(tinderuser1);  //{ id: '123abc', name: 'Sankky', isLoggedIn: false }
//kisi variable in object ka - uske keys ko access krna h ar sath me wo ye v bta dega ki uske object ok key ka data type
//Object.key(variable name of object)
console.log(Object.keys(tinderuser1)); // access object.key -obj  ka key .. kis obj - obj ka name
//output -                                  [ 'id', 'name', 'isLoggedIn' ] -- is in array

//same for values
console.log(Object.values(tinderuser1));  // [ '123abc', 'Sankky', false ]  -- is also  in array

//Object.entries(varName) - [ [],[],[],[] ]- means [["key","val"], ["key","val"] , ["key","val"] ....so on]
console.log((Object.entries(tinderuser1)));   //[ [ 'id', '123abc' ], [ 'name', 'Sankky' ], [ 'isLoggedIn', false ] ]

/*
//.hasOwnProperty("key")- 
//kai bar hm object ke andr pura loop through kr rhe hote hain ar loop krne ke baad ek value nikal rhe hain
   to value nikalte time kai bar kya hota h ki value exist hi nhi krti h ar agr value exist nhi krti h to 
   crash hone ke chance hote hain
   to ya to aap manually dekhiye kya wo value h ya nhi 
   or aap puch v skte hain that kya aapke pas ye value hai  - .hasOwnProperty (v: PropertyKey)
   ex- tinderuser1.hasOwnProperty()
*/
console.log(tinderuser1.hasOwnProperty("isLoggedIn"));  //true
console.log(tinderuser1.hasOwnProperty("isLogged"));  //false

//some more prototype / method for obj
/*
[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()  -- repatable h ya nhi ,usme loop lga skte hain ya nhi --{obj declare krte time kuch aise method hote hain jiske through uski looping bnd krskte hain ar aisa kiya v jata h data base ke dauran}
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

//Destructuring of object //Destructuring of array v hoti h

//Destructuring of object

const course = {
    coursename: "js in hindi",
    price : "999",
    courseInstructor: "Shivam"
}
//asscess 
console.log( course.courseInstructor) //Shivam
//for one time print is ok bt if we have to print for many time we use destructing 
// syn - const {kya value extract krni h} = kha se value extract krni h --- course obj se
//syntax const { } = varibale name of obj
const {courseInstructor} = course
console.log(courseInstructor);     //Shivam
console.log(courseInstructor);     //Shivam
console.log(courseInstructor);     //Shivam as many time as we can do

//also jo value extract krni h kafi bdi name h to name ko in
// destructuring me change krskte hain

//DESTRUCTURING
const {courseInstructor:Instructor} = course
console.log(Instructor);    //shivam
const {coursename:name} = course
console.log(name);    //js in hindi

/*
//React ke fundamental
//in recat - method hota h - we use destructuring 

//inside (by default props hota h ) - props.company , pprops.companyHike etc - bt er dont use like that 
//we use destructuring - object {} - inside ({}) - and put info - ({company})

const navbar = ({}) => {

}

// navbar ko cll krenge to kuch value denge  that logo ye hoga home me ye likhna h - navbar me changement keliye 
//call navbar

navbar(companyName = "Shiv")
*/


/*
//API - Application programming interface
- apna kam kisi ar ke sir pe dalna called api
//ex restaurant me menu card is api documentation 
    let we decided to eat dosa - we order it - and rest work till procees to eat done by restaurant that called api
    at google logged in - its google work to verify the user and get looged in

    //api is value come from backend and we use that value 
       phle value aati thi .xml structure me 
       ab value aati h json me ya kv kv object array me aati h
       json -
        {

       } // this is json // yes object is json but note the difference that object ka nam hoyta h json ka name nhi hota 
          baki all things of object same treated as json like - key  and key treated as string, value etc
      example
        {
            "name":"Shivam",
            "age":0,
            "email" :"abc@gmail.com"
        }
// now let see json se api call hoti h to hota kya h milta kya h 
// explore on google - search api.github
//object array me aati h
[
    {},
    {},
    {}
]

//explore more API
//api - randomuserme api
        copy  url inside randomuserme api - https://randomuser.me/api/
        google it
        copy the code/strurcture we get
       google-  open jsonformatter
       paste the code 
       we get the option - choose format beautify to understand about api
       also we have option code/form/text/view/ tree -use tree and explore 




