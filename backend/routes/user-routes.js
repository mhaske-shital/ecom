const express=require("express")
const { createUser, deleteUser, userProfile, userAdress } = require("../controller/user-controller")
const { authGaurd } = require("../middleware/auth-middleware")

const router=express.Router()
// http://localhost:5000/api/user/address
router.route("/register").post(createUser).delete(deleteUser).get(authGaurd, userProfile)
router.route("/address").post(authGaurd,userAdress)
module.exports=router