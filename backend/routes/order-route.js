const express = require("express");
const { order, distroyOrder, getAllOrders } = require("../controller/order-controller");
const {authGaurd} =require("../middleware/auth-middleware")
const router = express.Router();

router.route("/").post(order).delete(distroyOrder).get(authGaurd,getAllOrders)

module.exports = router;

// route hit kartna tas object takyach 
// {
//     "userId":"622063e653971c3359db59e4",
//    "products":[
//     {"productId":"622063e653971c3359db59ed",
//    "qty":"3"}]
// }