/*
//function - jo v hmne code likha h usko ek pacakage me bnd krdiya h 
  ar us package ki copy jb chahe jha chahe uski copy le jaskte hain*/

  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("M");
  //ab aise baar baar likhne se bachne ke liye we use function
  //syn - function varname (){log() ; log()}  //inside (params)  parameter
  function sayMyName(params) {
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("V");
  console.log("A");
  console.log("M");
  }
  //function ko call - to execute--> varname()    -- sayMyName- is Reference -- () -execution
  sayMyName() /*S
                H
                I
                V
                A
                M*/
  sayMyName   // nothing will print - kynki refrence de rha h ki wha ye function rhta h - execute ki baat nhi hui h 
  
  
  function addTwoNumber1(numA,numB){
      numA + numB;
  }
  //callfunction
  addTwoNumber1() // nothing done kynki number define nnhi h ar usko print v krana h ye v btana hoga
  
  function addTwoNumber(num1,num2){
      console.log(num1 + num2);
  }
  //callfunction
  addTwoNumber()          //NaN   - becz number knsa add krna h wo value diya nhi gya
  //provide value
  addTwoNumber("3" , 1)     //31
  addTwoNumber(3 , "1")    //31
  addTwoNumber( 3 , "a")   //3a
  addTwoNumber( 3 , null)   //3
  addTwoNumber(3 , 1)      //4
  //note
  /* function  addTwoNumber-varname (parameter)  {
  
  }
  //call function 
  addTwoNumber(arguments) */
  
  //store call function in memory (variable)
  const result = addTwoNumber(3 , 1)      //4  -- this 4 is due to console inside function
console.log("Result of a no is" , result); //Result of a no is undefined  // undefined becz hmme lga ki console return kr rha hoga ar hmne print krane ki kosis ki bt we get undefine becz console return nhi horha h yha pe 

// how we return in function
function MulTwoNumber(number1,number2) {
  //1st store in var(mul) what u want 
  let mul = number1*number2
  //return
  return mul
}
//store call function in variable(mulNumber)
const mulNumber= MulTwoNumber(2,3)    //here nothing print this time *becz we *do not use console* in function 
//print call function
console.log("multiple of two given no. is" , mulNumber); //multiple of two given no. is 6 // due to return we get the mulNumber in place of undefined

// note never use any operation or console --after return
//         we onlu can use all the operation , define variable , console -- before  return

function power(num1,num2) {

    console.log(num1+num2);
    //1st store in var(pow) what u want
    let pow = num1**num2
    console.log("multiple of two no. is", num1*num2); //multiple of two given no. is 6 -(2nd print) print becz return ke phle h
    return pow
    //or one more method
    //return num1**num2
    console.log("add of two num", num1+num2); // no print // becz after return
}
//memory  // call function
const PowerOfNo = power(2,3)    // 5 // console in function (1st print)
//print call function
console.log("power of given no is" , PowerOfNo);  // power of given no is 8 (3rd print)


function loginUserName(username) {
    return ` ${ username} just logged in`   //here we using string interpolation
}
//call function - loginUserName(argument) and print
console.log(loginUserName("Shivam"));  // Shivam just logged in
console.log(loginUserName(""));  // just logged in
console.log(loginUserName());  // undefined just logged in // becz koi v argument pass nhi hui h 

//using if 
function loginUserName(username) {
    if(username === undefined) {  //also we can use -> if(!username){}   //becz usrename is false => !false = true
        console.log("Please enter a user name")
        return
    }
    return ` ${ username} just logged in`
}
//call and print function
console.log(loginUserName("Shivam")); // Shivam just logged in
console.log(loginUserName(""));  // just logged in
console.log(loginUserName()); //undefined  - due to undefined if statement chla ar console chla Please enter a user name if ka and return krgya wahise

// user value de ya na de fir v undefine na ho 
//using if 
function loginUserName1(username1 = "Sam") {
    if(username1 === undefined) {  //also we can use -> if(!username){}   //becz usrename is false => !false = true
        console.log("Please enter a user name")
        return
    }
    return ` ${ username1} just logged in`
}
//call and print function
console.log(loginUserName1("Shivam")); // Shivam just logged in
console.log(loginUserName1(""));  // just logged in
console.log(loginUserName1())   // sam just logged in

//shooping card - jisme hmme pta nhi hota user kitne arguments dalega
function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(200)); //200
console.log(calculateCartPrice(200 , 400 , 500)); //200 --here also we get one and the starting argument
// to takle this problem 
//use rest operator also knw as spread operator (...num1,...num2 and so ) -- in parameter
//here we name this operator - rest operator - means jo v hmara args h uske ek bundle me pack kro ar hmme dedo
function calculateCartPrice1(...num1) {
    return num1
}
console.log(calculateCartPrice1(200)); //200
console.log(calculateCartPrice1(200 , 400 , 500 , 1000)) // [200 , 400 , 500 ,1000]

//interview
// if we use val1 , val2 and rest operator then
function calculateCartPrice3(val1,val2, ...num1) {
    return num1
}
console.log(calculateCartPrice3(200,20)); // [] - empty array becz val1, val2 - first two args goes inside val1 and val2
console.log(calculateCartPrice3(200 , 400 , 500 , 1000 , 2000, 20, 30 , 50)) // [500, 1000, 2000, 20, 30, 50 ] - here we notice that due to val1, val2 first two args goes inside val1 and val2 

// object to function

const user= {
    userName: "Shivam",
    price:1111
}

function handleObject(anyObject){ 
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price} `); // here function ko nhi pta h function me kn aane wala h wo sb kuch krega parameter-anyObject ke aadhar pe
    // anyobject ke adhar pr enter krega - anyobject.username and so on
}
//call function() - pass args and print
handleObject(user) // args me obj name ko dal diya 
//output - Username is Shivam and price is 1111 



//what if key that we used in ${} not available in object -> we get undefined result
const user1= {
    userName: "Shivam",
    rate:1111
}
function handleObject1(anyObject){ 
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price} `); // here function ko nhi pta h function me kn aane wala h wo sb kuch krega parameter-anyObject ke aadhar pe
    // anyobject ke adhar pr enter krega - anyobject.username and so on
}
//call function() - pass args and print
handleObject(user1) // args me obj name ko dal diya 
//output - Username is Shivam and price is undefined 

//note - type safety check krni pdti h - 
//jo price mai extract kr rha hun wo available h ya nhi object me
//ar jo value - parameter pass kr rhe ho wo object h ya nhi h 

//we can also pass object dirct without creating object name
//declare function with parameter- using interpolation - inject parameter.object inside call function - call function() and inside extraction define object what u want  
function handleObject2(anyobject) {
    console.log(`hy my name is ${anyobject.name} and my prices is ${anyobject.prices}`);
}
//call function()
handleObject2({
    name: "samarth",
    prices:399
})                      //output - hy my name is samarth and my prices is 399

//we can also pass array-datatype- inside the function same as object
const myNewArray = ["Shivam",2000000,"shivam@gmail.com"]
function handleArray(anyArray){
    // return anyArray[2] or 
    return anyArray


}
//call function()
// console.log(handleArray(myNewArray)); or - this is for - // return anyArray[2] or 
console.log(handleArray(myNewArray)); //[ 'Shivam', 2000000, 'shivam@gmail.com' ]
console.log(handleArray(myNewArray[2])); //'shivam@gmail.com' 
//or
console.log(handleArray([200,400,500,600])); //[ 200, 400, 500, 600 ]



