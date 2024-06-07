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

  //Arrow function
// note-- Arraow function ke andr this nhi hota h how let see
function chai_Pani() {
    let username = "Shivam"
    console.log(this.username); //undefined- so we can say- Arraow function ke andr this use  nhi hota h
}
chai_Pani()
//simply this is only used in object not in function


//CONFUSION - this ko lekr
function Pizza_Code() {
    username = "Shivam"
    console.log(this.username); // Shivam - here we geeting the value 
}
Pizza_Code()


// we find that console(this) - in object - {} - give empty object
// we find that cosole (this) - in function - in function it is giving Object[global] , clearImmediate ,  setImmediate,  clearInterval, clearTimeout, setTimeout,navigator,performance, crypto etc
function chai() {
    console.log(this); // we find here that - in function it is giving Object[global] , clearImmediate ,  setImmediate,  clearInterval, clearTimeout, setTimeout,navigator,performance, crypto etc
}
//call function
chai()

