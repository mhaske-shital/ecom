const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user",
    },
    products: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "product",
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
  },

  { timestamps: true }
);
module.exports = mongoose.model("order", orderSchema);