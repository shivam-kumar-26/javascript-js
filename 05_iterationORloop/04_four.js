// more about  object 
// object ke upper loop kaise lgega ar kya lgega 
/*for in loop
syntax
for (const key in object) {
}
    */
const myObject = {
    js:"javaScript",
    cpp:"C++",
    rb:"ruby",
    swift: "swift by apple"
}
for (const key in myObject){
    // console.log(key); // js cpp rb swift - sari keys aagyi h 
    // value of key krliye
    // console.log(myObject[key]);  // javascript  c++  ruby  swift by apple
    // key and value eksath
    console.log(`${key} shortcut is for ${myObject[key]}`);
    /* output js shortcut is for javaScript   cpp shortcut is for C++   rb shortcut is for ruby  swift shortcut is for swift by apple*/
}


// for in loop on array

const program = ["js" , "rb" , "py" , " java" , "cpp"]

for (const key in program){
    // console.log(key);     // 0 1 2 3 4 //key mili - note array ki v key hoti h jo 0 se start hoti hain
    // console.log(program[key]);  // js  rb  py   java  cpp  // value of key
    console.log(`${key} of value ${program[key]}`) ;
    /*0 of value js  1 of value rb  2 of value py  3 of value  java  4 of value cpp*/
}



// kya hmlog for in loop - msp me use krskte hain - nhi print hoga 
/// becz -  map itreatable nhi h so koi chiz itreatable nhi h to usko is trh loop me nhi likha ja skta 

const map = new Map()
map.set('In' , "India")   // In - key -- India value
map.set('USA' , "United State Of America")
map.set('Fr' , "France")
map.set('In' , "India")    // dublicate ya copy not allowed hmarA PRINT AS IT IS RHEGA unique in nature of map ke karn
// console.log(map);

for (const key in map){
    console.log(key);  // nothing print - becz map itreatable nhi h  
}