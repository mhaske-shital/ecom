const express=require('express')
const { login, createUser } = require('../controller/auth-controller')

const router=express.Router()

router.route("/login").post(login)
// router.route("/register").post(createUser)

module.exports=router