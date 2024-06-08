//for loop  - for loop alg alg jgh bda jump krta h - kv yha control flow jata h kv khi ar chla jata h 
// jaise function me - jb function ko call kr rhe hain to kv upper chla gya function ke defination ke upper
/*syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    initialization -- index - - variable declare , and jiske andr value 0 rkh diya 
    condition check - index < array.length 
    condition true- then scope ke andr
    iske baad loop ke andr - scope me --**chla jata h ar uske baad 
    jb ye scope complete hone wala higa uske phle index ki value ko bdha diya again check condition true firse scope ke andr index increase toll this process jb tk condition false na hojaye
    indexx++ - index ko bdahye ja rha h - jaise jaise  iteration horha h 
    */
   for (i = 0 ; i <=10 ; i++){   // use short key - ctrl + d to change the name of any var or any thig at a same time
    const element = i;
    console.log(element);  // 0 , 1 , 2 , 3 , .....10
   }

   for (let i = 0 ; i<=10 ; i++){
    console.log(i);    // 0 , 1 , 2 , 3 ......10
   }


   // for kr andr if 
   for (let i=0; i<=10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is a best number");
    }
    console.log(element);  // 0 , 1 , 2 , 3 , 5 is the best No. , 5 , 6 ...  10 -- note kaise scope kam kr rha h
   }


   // for ke andr for

   for(let i=0 ; i<=10; i++){
    console.log(`Outer loop value : ${i}`);
    for(let j = 1 ; j<=10; j++){
        //console.log(`inner loop value ${j} and inner loop ${j}`);
        console.log(i + "*" + j + "=" + i*j );
    }
   }

   // using array in for loop
   let myarray = ["flash" , "Batman" , "Superman"]
   console.log(myarray.length);                      //3

   for(index=0; index<myarray.length; index++){
    const element = myarray[index]
    console.log(element);                           // flash  Batman  Superman
   } 

   // using array in for loop - me ek prblm v h - condition check me - 
   //agr******- i<=array.length hua to ek value array ke length ke eual v milega ar jb ki array ka indexing 0 se h so ek value aary condition me extra mila jo ki undefined dega

   let myArray = ["IronMAn" , "BlackPanthe" , "SpiderMan", "Capitan"]
   console.log(myArray.length);  // 4 -- 1,2,3,4 

   for(i=0; i<=myArray.length ; i++){  // bt yha count - indexing se hoga 0,1,2,3 = 4 - so 4th place pe indexing ke karn kuch value bcha nhi ialiye value - undefined dega
    const element = myArray[i];
    console.log(element);  //  IronMan BlackPanthr Spideman Capitain undefined****
   }


// break and continue***************** 
//break work same as in switch case
// break-  bich me codition ke a/c  break krne se - wo usko achieve krne ke baad 
// aGLA LINE YA AGLA CONDITION PRINT NHI KRAEGA  ya smjo direct us loop se bahr nikl jega

for (let index = 0 ; index<=20 ; index++){
    if(index == 5){
        console.log("Detected 5");
        break;
    }
    console.log(`value os i is ${index}`);
}
/*output 
 value os i is 0
value os i is 1
value os i is 2
value os i is 3
value os i is 4
Detected 5 
// break ke karn yhi se scope se bahr aagya  */

//continue
for (let index = 0 ; index<=6 ; index++){
    if(index == 3){
        console.log("Detected 3");
        continue   // me jo hmne continue ke phle condition diya usko drop krega mtlb usko skip krga ar next continue krega baki ko
    
    }
    console.log(`value os i is ${index}`);
}
/*output
value os i is 0
value os i is 1
value os i is 2
Detected 3
value os i is 4
value os i is 5
value os i is 6 */





