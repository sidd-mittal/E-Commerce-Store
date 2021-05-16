const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const tokenValidation = require("../middleware/tokenValidation");

//const joiSchemaValidation = require("../middleware/joiSchemaValidation");
//const productSchema = require("../apiSchema/productSchema");

// commented out since @hapi/joi is deprecated. need to update

// router.post(
//   "/",
//   joiSchemaValidation.validateBody(productSchema.createProductSchema),
//   productController.createProduct
// );

router.post(
  "/",
  tokenValidation.validateToken,
  productController.createProduct
);

router.get(
  "/",
  tokenValidation.validateToken,
  productController.getAllProducts
);

router.get(
  "/:id",
  tokenValidation.validateToken,
  productController.getProductById
);

router.put(
  "/:id",
  tokenValidation.validateToken,
  productController.updateProduct
); // NOT YET WORKING

router.delete(
  "/:id",
  tokenValidation.validateToken,
  productController.deleteProduct
);

module.exports = router;
