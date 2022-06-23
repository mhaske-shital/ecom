const express=require("express")
const { getAllProduct, getSingleProduct, deleteProduct, updateProduct, addProduct } = require("../controller/product-controller")
const { upload } = require("../middleware/upload")
const {authGaurd}=require("../middleware/auth-middleware")
const router=express.Router()

router.route("/").get(getAllProduct)
router.route("/addProduct").post(authGaurd, upload.single("image"), addProduct)
router.route("/:id").get(getSingleProduct).delete(deleteProduct).put(updateProduct)

module.exports=router