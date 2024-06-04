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




