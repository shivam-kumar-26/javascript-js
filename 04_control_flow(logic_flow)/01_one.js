/* av tk jitna code hmne likha h wo sv code run hue hain 
   bt ab hm chahte hain ki jo code h wo pura execute na ho wo coditional based execution ho
   a/c to condition wahi run ho loke - logging keliye koi code , logout keliye koi ar code 
   so we use loop - if , else, if-else, switch etc - these sre control flow or logic flow*/

   //if statement
   /* syntax 
   if (condition) {   // condition - ture - we go inside/internal code execute of if loop/ flase - we don't go inside the loop
    }      // ans inside curly braces it is --- scope 
          note internal code run kre na kre  a/c to condition bt bahr ka code execute hoga hi hoga

    also we use - comprasion operator -- < , > , <= , >= , ==, != , ===  -for gettin condition true / false */
   if(true){
    console.log("execute"); // execute
   }
   if(2==="2"){
    console.log("True");
   }
   console.log("false"); // false

   if(3!=2){
    console.log("true"); //true
   }


   if (2!=3){
    console.log("yes 2!=3"); // yes 2!=3
   }

const isLoggedIn = true
const temperature = 41
if(isLoggedIn){
    console.log("isLoggedIn"); //isLoggedIn
}
if(temperature>50){
    console.log("its veru=y hot");
}else{
    console.log("its not hot");
}
console.log("temp is now ");


//scope - inside/internal tk hi rhega global execution nhi hoga 
const score =200
if(score >100){
    const Power = "fly"  // if we use var power then - var is global variable - it execute inner scipe as well as global part also // bt poer yha ka variable scope se bahr aana nhi chahiye
    console.log(`User power: ${Power}`); // Use power: fly
}
//scope se bahr
// console.log(`User power: ${Power}`); // it will not executed - give error - becz ${power} is defined inside scope not out

//short hand notation  - we not use scope also - called implicit scope - ki hmne man liya h ki scope h*************************
const bal = 1000
if (bal > 500) console.log("save money"); //  save money
//we can also write multiple line - spreating by comma , and must end with semicolomn ;

const account = 1000 
if(account >500) 
    console.log("you are eligible in sbi"), //you are eligible in sbi
    console.log("your account detail");     //your account detail
    console.log("transcation completed , thankyou"); //transcation completed , thankyou

// nesting
const balanceIs = 1000
if(balanceIs<500){
    console.log("your balance is 500");
}else if(balanceIs<600){
    console.log("your balance is 600");
}else if(balanceIs<900){
    console.log("your balance is 900");
}else {
    console.log("your balance is more than 1200");   //your balance is more than 1200
}


//more nesting - using && , || 
const userLoggedIn = true
const debitCard = true
const upiPay = true
const COD_Cash = false
if(userLoggedIn && COD_Cash ){
    console.log("Sry u may try again");
    
}else if(userLoggedIn && debitCard || upiPay ) {
    
    console.log("u may do shoaping"); //u may do shoaping
    console.log("Welcome to FlipKart"); //Welcome to FlipKart
    console.log("Add ur product");  //Add ur product
}else{
    console.log("Visit again");
}








