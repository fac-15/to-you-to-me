const bcrypt = require("bcryptjs");

const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  postUserHandler,
  errorHandler,
  loginHandler
} = require("./handlers");

const router = (req, res) => {
  // console.log("this is req,", req, "this is res", res);
  const { url } = req;
  const requestMethod = req.method;
  const requestUrl = req.url;
  console.log("meth", requestMethod, "url", requestUrl);
  const endpoint = url.split("/")[1];

  if (endpoint === "") {
    homeHandler(res);
  } else if (endpoint === "loginPage") {
    loginHandler(req, res);
    // } else if (url === "/logout") {
    //   // logoutHandler(req, res);
    // } else if (url === "/register") {
    // registerHandler(req, res);
    // } else if (url.includes("/hobby")) {
    //   hobbyHandler(req, res);
    // }
  } else if (endpoint == "login") {
    loginData(req, res);
  } else {
    publicHandler(url, res);
  }
};

module.exports = router;
