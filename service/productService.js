const Product = require("../database/models/productModel");
const { formatMongoData, checkObjectId } = require("../helpers/dbHelper");
const constants = require("../constants/index");
const mongoose = require("mongoose");

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });
    let result = await product.save();
    return formatMongoData(result);
  } catch (error) {
    console.log("Something went wrong – service: createProduct", error);
    throw new Error(error);
  }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return formatMongoData(products);
  } catch (error) {
    console.log("Something went wrong – service: getAllProducts", error);
    throw new Error(error);
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log("Something went wrong – service: getProductById", error);
    throw new Error(error);
  }
};

module.exports.updateProduct = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log("Something went wrong – service: updateProduct", error);
    throw new Error(error);
  }
};

module.exports.deleteProduct = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log("Something went wrong – service: deleteProduct", error);
    throw new Error(error);
  }
};
