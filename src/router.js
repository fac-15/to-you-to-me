const bcrypt = require("bcryptjs");

const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  postUserHandler,
  errorHandler,
  loginPageHandler,
  loginData,
  registerPageHandler,
  registerUserHandler
} = require("./handlers");

const router = (req, res) => {
  const reqMethod = req.method;
  const reqUrl = req.url;
  const { url } = req;
  const requestMethod = req.method;
  const requestUrl = req.url;
  console.log("meth", requestMethod, "url", requestUrl);
  const endpoint = url.split("/")[1];

  if (endpoint === "") {
    homeHandler(res);
  } else if (endpoint === "loginPage") {
    loginPageHandler(req, res);
  } else if (endpoint === "login") {
    loginData(req, res);
  } else if (endpoint === "registerPage") {
    registerPageHandler(req, res);
  } else if (endpoint === "register") {
    registerUserHandler(req, res);
  } else {
    publicHandler(url, res);
  }
};

module.exports = router;
