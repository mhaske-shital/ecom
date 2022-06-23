const express = require('express')
const app = express()
const env=require("dotenv")
env.config({path:"./config/.env"})

const db=require("./config/db")
db()

const cors=require("cors")
const product=require("./routes/product-routes")
const auth=require("./routes/auth-routes")
const user=require("./routes/user-routes")
const order= require("./routes/order-route")

app.use(cors())
app.use(express.json()) 
app.use(express.static("public/")) 
app.use("/api/products",product)
app.use("/api/auth",auth)
app.use("/api/user",user)
app.use("/api/order",order)

 
app.listen(process.env.PORT || 5000, () => console.log(`http://localhost:${process.env.PORT}`))