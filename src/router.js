const bcrypt = require('bcryptjs');

const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  postUserHandler,
  errorHandler,
  hobbiesHandler,
  loginPageHandler,
  loginData,
  registerPageHandler,
  registerUserHandler
} = require('./handlers');

const router = (req, res) => {
  const reqMethod = req.method;
  const reqUrl = req.url;
  const { url } = req;

  // console.log("method: ", reqMethod, "url: ", reqUrl);
  const endpoint = url.split('/')[1];

  if (endpoint === '') {
    console.log('router asking for hobbies handler...');
    homeHandler(res);
  } else if (endpoint === 'hobbies') {
    hobbiesHandler(res);
  } else if (endpoint === 'loginPage') {
    loginPageHandler(req, res);
  } else if (endpoint === 'login') {
    loginData(reqMethod, reqUrl);
  } else if (endpoint === 'registerPage') {
    registerPageHandler(req, res);
  } else if (endpoint === 'register') {
    registerUserHandler(req, res);
  } else {
    publicHandler(url, res);
  }
};

module.exports = router;
