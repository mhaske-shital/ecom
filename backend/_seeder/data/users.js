const  bcrypt =require("bcryptjs")
const users =[{
    name:"shital",
    email:"shital@gmail.com",
    password:bcrypt.hashSync("123",10),
    isAdmin:true
},{
    name:"komal",
    email:"komal@gmail.com",
    password:bcrypt.hashSync("123",10),
    isAdmin:false

}
]
module.exports=users