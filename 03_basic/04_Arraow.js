/********************************************************************************************************** */
//Arrow Function  // 2015 me ES6 ke andr desing hua h ye function
//.this keyword - ye current contest ke bare me btata h
// note-- Arraow function ke andr this nhi hota h 
// arrow function smjne ke liye this key word smjna hoga ar this keyword ke keliye objcet ko
 
/*basic object bnate hain - user register ka contain user name , registeration fee , and one welcome msg
make that  welcome msg ek function  hona chahiye to question ye h ki jo v hmara user is object ke andr aaya usko hi mai 
welcome msg pas kru
ab user name by the way shivam h bt aage jake bdl skta h - jaise kisi ar ne is object ka kAm liya ho ar user name change hogya ho
to use name change ke time hm chhahte hain ki welcome msg kuch aslg trike se dikhe
//scope ko v dhyan me rkhna h */
// object bnao
const user = {
    userName:"Shivam",
    price:9999,

    welComMessage: function() {
        //ab agr hm current contest ko refer kr rhe hain - username , price ko use - this -keyword
        //string interpolation
        //so use of --this inside the current contenst 
        console.log(`${this.userName} , welcome to website`);
    }
}
// run as object 
//user.welComMessage // run to hoga bt nothing print becz welcomemsg ek method h so we need ( parenthesis)
//user.welComMessage()  //Shivam , welcome to website
//now change user name - means contest change
//user.userName= "sam"
//user.welComMessage()  //sam , welcome to website



// now this ka pta krte hain wo kr kya rha h
const user1 = {
    userName1:"Shiva",
    prices:1111,

    welComMessages: function() {
        //so use of --this inside the current contenst 
        console.log(`${this.userName1} , welcome to website`); // iske 1st jgh rhne ke karn 1st print 
        console.log(this); // this kya krta h pta chlega
        //2nd print - becz of console (this)
        /*{
           userName1: 'Shiva',
           prices: 1111,
           welComMessages: [Function: welComMessages]
           }*/
          /* again after 3rd print - 4rth print - console (this)
           {
              userName1: 'sam',
              prices: 1111,
              welComMessages: [Function: welComMessages]
            } */

    }
}
user1.welComMessages()  // 1st print - Shiva , welcome to website

//now change user name - means contest change
user1.userName1= "sam"
user1.welComMessages()  // 3rd print -  sam , welcome to website

//note this - jo cureent contest ke bare me btata h  - means jo v changement horha h usko v btata h 

// agr - console(this) ko last me print krate hain the what will happen
const user2 = {
    userName2:"Shiva",
    priceList:1111,

    welComMessages: function() {
        //so use of --this inside the current contenst 
        console.log(`${this.userName2} , welcome to website`);
    }
}
console.log(this);  /* {}  - - empty object we get - becz hm - nord environment ke andr hain so (this)- reffer to {} empty obj
                           kynki av global ke andr koi contest hi nhi h isiliye empty. 
                           phle - js ko execute krne ka ek hi trika tha jo tha browser ke andr jo browser ka engine h jo js ko execute keta tha  wo simply engine ek hi jghy p-aya jata tha jo tha browser ke andr
                        ab hmne engine ko nikala ar usko alg alg nam diya like nord , dino, bun so ab engine hmare pas stand alone h 
                        so browser me jb v run krta h b(this) - to global ke andr jo object h - windows object
  INTERVIEW QUE   ----   so in inspect - console this - global obj - we get windows*/

  //discuss about this
// note-- Arraow function ke andr this nhi hota h how let see  but function me this use hota h  - line 87 and 97
function chai_Pani() {
    let username = "Shivam"
    console.log(this.username); //undefined- so we can say- Arraow function ke andr this use  nhi hota h // or this as a function kam nhi krta h bt as a object kam krta h 
}
chai_Pani()
//simply this is only used in object not in function



//this keyword in function 
function Pizza_Code() {
    username = "Shivam"
    console.log(this.username); // Shivam - here we geeting the value  using this keyword
}
Pizza_Code()


// we find that console(this) - in object - {} - give empty object
// we find that cosole (this) - in function - in function it is giving Object[global] , clearImmediate ,  setImmediate,  clearInterval, clearTimeout, setTimeout,navigator,performance, crypto etc
function chai() {
     console.log(this); // we find here that - in function it is giving - Object[global] , clearImmediate ,  setImmediate,  clearInterval, clearTimeout, setTimeout,navigator,performance, crypto etc
}
//call function
// chai(this) // note inside call function - argument pas hota h ar argument function ke a/c hota h / and (this) is not argument 
chai()


// if we console(this) outside the function then
function proof() {
}
console.log(this)  // {} - empty obj - becz gobal me koi contest hi nhi h 
//call function
proof()
// and we we console(this) - inspect- their we get - window as global - so browser me sbse jayda jo global object h wo window object h

// console (this) in  function - get output - 
const cheeze = function(){
    let usergame = "Battle"
    console.log(this);   //in function it is giving - Object[global] , clearImmediate ,  setImmediate,  clearInterval, clearTimeout, setTimeout,navigator,performance, crypto etc
     // mtlb this ke pas kuch to h jisko use kiya ja skta h 
}
//call function
cheeze()


//// **************Arrow Function *******************
const Mushroom = () => {     // function keyword ht jaega (parameter) ke bad => lg jaega baki sb as it is
    let userName = "Shiva",
    useGame = "IGI"
    console.log(this);  // {} - 1st print-empty obj - chahe keyword me let use kro na kro arrow function me this - {} - empyt obj hi dega
    console.log(this.useGame); // undefined  /3rd print- means arrow function me - this keyword use nhi hota
    console.log(this.userName); // undefined  --/4th print- means arrow function me - this keyword use nhi hota
}
//call function
console.log(this);  //{} / 2nd print -empty obj - kynki global contest me kuch nhi h 
Mushroom()

/*Arrow function
syntax- () => {} - call function 
// explicit return - jb {} and return lgana pd rha h */
const subTwoNo = (num1,num2)=> {
    return num1-num2
}
console.log(subTwoNo(5,3))  //2

//arrow function - use in 2nd method - called implicit return
//implicit return - don't use curly braces and return keyword 
// agr curly bracess me wrap kiya means { num1 + ,-,* etc  num2} to return keyword v use krna pdega

const badapow = (num3,num4)=> num3**num4
console.log(badapow(5,2))  //25

//or - this is mainly use in react js
const microsoft = (num1,num2)=> (num1 * num2) // we can wrap in () - parenthesis
console.log(microsoft(5,2));   //10

//implicit return -me - jb hm object return krana chahte hain 
const object1 = (str1) => {
    usernam: "shivam"
}
console.log(object1()); // undefined - becz  in arrow function -we need to wrap object in()
 
const object2 = (str2) => ({usernam: "shivam"})  // obj wrap in ()
console.log(object2()); //  { usernam: 'shivam' }


//function bahot sara loop me kam aata h / a/c to method 
// forEach - A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 
const newArray=[2 ,2,5,7,9,3]
//correct syntax for function
newArray.forEach(function(){}) // inside() we use arrow/classic etc function //correct syntax
//correct syntax - for arrow function
newArray.forEach(()=>{}) // explicit return - use {} and return
//or
newArray.forEach(()=>({})) // implicit return - not uese return and {} or - use ({}) braces inside parenthesis

    








