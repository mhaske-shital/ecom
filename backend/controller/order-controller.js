const order = require("../model/order-model");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

exports.order = async (req, res) => {
  try {
    const data = await order.create(req.body);
    res.status(200).json({
      success: true,
      message: "order placed",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.distroyOrder = async (req, res) => {
    try {
      const data = await order.deleteMany(req.body);
      console.log(data.data);
      res.status(200).json({
        success: true,
        message: "order delte",
        result: data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error,
      });
    }
  };

  exports.getAllOrders = async (req, res) => {
    try {
      const {userId}=await jwt.verify(req.headers.authorization,process.env.JWT_SECRET_KEY)
      console.log(userId);
      
      const result = await order.find({userId}).populate("products.productId");
      // console.log(data.data);
      res.status(200).json({
        success: true,
        message: "all order",
        result: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "error"+ error,
      });
    }
  };


