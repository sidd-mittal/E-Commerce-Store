module.exports = {
  defaultServerResponse: {
    status: 400,
    message: "",
    body: {},
  },
  productMessage: {
    PRODUCT_CREATED: "Product Created Successfully",
    PRODUCT_FETCHED: "Product Fetched Successfully",
    PRODUCT_NOT_FOUND: "Product Not Found",
    PRODUCT_UPDATED: "Product Updated Successfully",
    PRODUCT_DELETED: "Product Deleted Successfully",
  },
  databaseMessage: {
    INVALID_ID: "Invalid ID",
  },
  userMessage: {
    SIGNUP_SUCCESS: "Signup Successful",
    DUPLICATE_EMAIL: "User already exists with given email",
    LOGIN_SUCCESS: "Login Successful",
    USER_NOT_FOUND: "User Not Found",
    INVALID_PASSWORD: "Incorrect Password",
  },
  requestValidationMessage: {
    TOKEN_MISSING: "Token Missing",
  },
};
