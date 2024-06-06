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
user.welComMessage // run to hoga bt nothing print becz welcomemsg ek method h so we need ( parenthesis)
user.welComMessage()  //Shivam , welcome to website
//now change user name - means contest change
user.userName= "sam"
user.welComMessage()  //sam , welcome to website



// now this ka pta krte hain wo kr kya rha h
const user1 = {
    userName1:"Shiva",
    prices:1111,

    welComMessages: function() {
        //so use of --this inside the current contenst 
        console.log(`${this.userName1} , welcome to website`);
        console.log(this); // this kya krta h pta chlega
    }
}
// user.welComMessage // run to hoga bt nothing print becz welcomemsg ek method h so we need ( parenthesis)
user1.welComMessage()  //Shivam , welcome to website
//now change user name - means contest change
user1.userName1= "sam"
user1.welComMessage()  //sam , welcome to website

