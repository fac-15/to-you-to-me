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
  registerData
} = require("./handlers");

const router = (req, res) => {
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
    registerData(req, res);
  } else {
    publicHandler(url, res);
  }
};

// } else if (url === "/logout") {
//   // logoutHandler(req, res);
// } else if (url === "/register") {
// registerHandler(req, res);
// } else if (url.includes("/hobby")) {
//   hobbyHandler(req, res);
// }

module.exports = router;
