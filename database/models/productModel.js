const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    brand: String,
  },
  {
    timestaps: true,
    toObject: {
      transform: function (doc, ret, options) {
        // doc – The mongoose document which is being converted (simply a row in a table)
        // ret – The plain object representation which has been converted
        ret.id = ret._id; // simply changing the name of _id to id when sending data to client
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Product", productSchema);
