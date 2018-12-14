const bcrypt = require("bcryptjs");

const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  postUserHandler,
  errorHandler,
  hobbiesHandler,
  loginPageHandler,
  loginData,
  logoutHandler,
  registerPageHandler,
  registerUserHandler,
  hobbyPageHandler,
  addHobby
} = require("./handlers");

const router = (req, res) => {
  // console.log("what is the cookie status", req.headers.cookie);

  const { url } = req;

  // console.log("method: ", reqMethod, "url: ", reqUrl);
  const endpoint = url.split("/")[1];

  if (endpoint === "" || endpoint === "home") {
    console.log("router asking for hobbies handler...");
    homeHandler(req, res);
  } else if (endpoint === "hobbyPage") {
    hobbyPageHandler(req, res);
  } else if (endpoint === "hobby") {
    addHobby(req, res);
  } else if (endpoint === "hobbies") {
    hobbiesHandler(res);
  } else if (endpoint === "loginPage") {
    loginPageHandler(req, res);
  } else if (endpoint === "login") {
    loginData(req, res);
  } else if (endpoint === "registerPage") {
    registerPageHandler(req, res);
  } else if (endpoint === "register") {
    registerUserHandler(req, res);
  } else if (endpoint === "logout") {
    logoutHandler(req, res);
  } else {
    publicHandler(url, res);
  }
};

module.exports = router;
