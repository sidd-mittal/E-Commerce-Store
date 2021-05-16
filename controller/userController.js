const constants = require("../constants/index");
const userService = require("../service/userService");

module.exports.signup = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    console.log(req.body);
    const responseFromService = await userService.signup(req.body);
    response.status = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong – controller: signup", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.login = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await userService.login(req.body);
    response.status = 200;
    response.message = constants.userMessage.LOGIN_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong – controller: login", error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
